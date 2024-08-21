import { useEffect, useState } from "react";
import { Form } from "@remix-run/react";
import Icon from "./Icon/Icon";
import { IconName } from "public/icons/name";
import { Link } from "./Link";

// Define the props for the Footer component
interface FooterProps {
  footerData: {
    image: string;
    copyright: {
      text: string;
    };
    prefooter: {
      title: string;
      subtitle: string;
      newsletter: {
        placeholder: string;
        buttonTitle: string;
      };
    };
    widgets: {
      about: {
        title: string;
        contacts: {
          title: string;
          value: string;
        }[];
        socials: {
          icon: string;
          link: string;
        }[];
        stats: {
          title: string;
          value: string;
        }[];
        greeting: string;
      };
      links: {
        title: string;
        links: {
          title: string;
          link: string;
        }[];
      }[];
    };
  };
}

const Footer = ({ footerData }: FooterProps) => {
  const { image, prefooter, widgets, copyright } = footerData;
  const { about, links } = widgets;

  const [showScrollUpButton, setShowScrollUpButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUpButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer
        className="relative z-0 bg-top bg-no-repeat before:absolute before:inset-0 before:z-[-1] before:bg-gradient-to-t before:from-gray-900 before:via-gray-900/80 before:to-gray-900/75"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Footer top or subscription */}
        <div className="border-b border-gray-600">
          <div className="container mx-auto grid grid-cols-1 items-center gap-4 gap-y-8 px-4 py-12 md:grid-cols-2 md:gap-y-0 lg:px-12">
            <div data-aos="fade-up" data-aos-delay="100">
              <h4 className="text-4xl font-bold leading-[1.5] text-white">
                {prefooter.title}
              </h4>
              <p className="text-white text-opacity-65">{prefooter.subtitle}</p>
            </div>
            <NewsletterForm prefooter={prefooter} />
          </div>
        </div>

        {/* Footer main */}
        <div className="container mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 gap-6 pb-12 pt-14 md:grid-cols-2 md:gap-y-5 md:pb-12 md:pt-12 lg:grid-cols-3 lg:gap-y-0 lg:pb-14 lg:pt-16">
            {about && <AboutSection about={about} />}
            {links &&
              links.map((link, i) => <LinksSection key={i} link={link} />)}
          </div>
        </div>

        {/* Footer copyright */}
        {copyright.text && (
          <div className="bg-white/5">
            <div className="container mx-auto px-4 py-5 lg:px-12">
              <div className="text-center text-white text-opacity-80">
                {copyright.text}
              </div>
            </div>
          </div>
        )}
      </footer>

      {/* Scroll up button */}
      {showScrollUpButton && (
        <div className="fixed bottom-14 right-5 z-10 transition-all duration-500">
          <button
            type="button"
            onClick={scrollToTop}
            className="h-12 w-12 rounded-full bg-white text-center leading-[3rem] text-blue-brand shadow-xl transition-all duration-300 hover:bg-blue-brand hover:text-white dark:bg-blue-brand dark:text-white dark:hover:text-white"
          >
            <Icon
              id="arrow-bottom"
              className="mb-[0.15rem] inline-block h-6 w-6 rotate-180 fill-current"
            />
          </button>
        </div>
      )}
    </>
  );
};

const NewsletterForm = ({
  prefooter,
}: {
  prefooter: FooterProps["footerData"]["prefooter"];
}) => (
  <div data-aos="fade-up" data-aos-delay="100">
    <Form className="relative ml-auto flex flex-wrap items-center rounded-xl max-sm:justify-center max-sm:gap-4 sm:flex-nowrap">
      <input
        type="email"
        placeholder={prefooter.newsletter.placeholder}
        className="h-[3.75rem] w-full border border-white bg-transparent pl-[0.938rem] text-white focus:border-white/80 focus:outline-none max-sm:rounded-xl sm:rounded-l-xl sm:border-r-0"
      />
      <button
        type="submit"
        className="inline-flex h-[3.75rem] items-center justify-center whitespace-nowrap bg-blue-brand px-6 py-3 text-base font-medium tracking-[0.04rem] text-white transition-[filter] hover:brightness-[1.08] focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-transparent focus:brightness-[1.08] active:brightness-[1] max-sm:w-full max-sm:rounded-xl sm:rounded-r-xl xl:text-[1.125rem]"
      >
        <Icon
          id="paper-plane"
          className="mr-2 inline-block h-4 w-4 fill-current"
        />
        {prefooter.newsletter.buttonTitle}
      </button>
    </Form>
  </div>
);

const AboutSection = ({
  about,
}: {
  about: FooterProps["footerData"]["widgets"]["about"];
}) => (
  <div
    className="col-span-1 lg:col-span-1"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    <h4 className="mb-6 text-2xl font-bold text-white">{about.title}</h4>
    <div className="space-y-5">
      {about.contacts.map((contact, i) => (
        <div key={i}>
          <h6 className="mb-1 text-lg font-medium leading-[1.8] text-white md:text-xl">
            {contact.title}
          </h6>
          <Link
            to={
              /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.value)
                ? `mailto:${contact.value}`
                : `tel:${contact.value}`
            }
            className="relative text-lg leading-[1.8] text-white/60 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-blue-brand after:transition-all after:duration-300 hover:text-blue-brand hover:after:w-full md:text-xl"
          >
            {contact.value}
          </Link>
        </div>
      ))}
    </div>
    <div className="mt-10 flex gap-3 md:gap-4 lg:justify-start">
      {about.socials.map((social, i) => (
        <Link
          key={i}
          to={social.link}
          className="relative z-0 flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white text-gray-900 transition-all duration-500 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:scale-0 before:rounded-full before:bg-blue-brand before:transition-all before:duration-500 hover:border-blue-brand hover:text-white hover:before:scale-100"
        >
          <Icon
            id={social.icon as IconName}
            className="inline-block h-[1.125rem] w-[1.125rem] fill-current"
          />
        </Link>
      ))}
    </div>
    <div className="mt-8 space-y-2">
      {about.stats.map((stat, i) => (
        <div className="text-lg leading-[1.8] text-white/60 md:text-xl" key={i}>
          {stat.title}:{" "}
          <span className="text-xl font-medium text-white md:text-2xl">
            {stat.value}
          </span>
        </div>
      ))}
    </div>
    <div className="mt-8 text-white/60">{about.greeting}</div>
  </div>
);

const LinksSection = ({
  link,
}: {
  link: FooterProps["footerData"]["widgets"]["links"][number];
}) => (
  <div
    className="col-span-1 lg:col-span-1"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    <h4 className="mb-6 text-2xl font-bold text-white">{link.title}</h4>
    <ul className="flex flex-col gap-y-6">
      {link.links.map((item, i) => (
        <li key={i}>
          <Link
            to={item.link}
            className="relative leading-[1.8] text-white/60 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-brand after:transition-all after:duration-300 hover:text-blue-brand hover:after:w-full"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
