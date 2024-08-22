import { IconName } from "public/icons/name";
import { LinkButton } from "./Form/Button";
import Icon from "./Icon/Icon";
// Define the type for the `videobanner` object
interface VideobannerCardProps {
  videobanner: {
    title: string;
    description: string[];
    buttons: { icon: IconName; title: string; link: string }[];
    stat: { image: string; quotes: string; author: string };
    image: string;
    video: string;
  };
}

export default function VideobannerCard({ videobanner }: VideobannerCardProps) {
  return (
    <section className="relative z-0 overflow-hidden dark:bg-gray-900">
      <div className="container mx-auto space-y-14 px-4 py-14 lg:space-y-24 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
          <div>
            <h3
              className="border-b-2 border-transparent text-4xl font-bold capitalize text-gray-900 dark:text-white lg:text-[2.625rem]"
              dangerouslySetInnerHTML={{ __html: videobanner.title }}
            />
            <div className="mt-3 space-y-8 text-base leading-[2] text-gray-900 dark:text-white">
              {videobanner.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div
              className="mt-8 space-y-4 sm:space-x-4 sm:space-y-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {videobanner.buttons.map((button, i) => (
                <LinkButton
                  key={i}
                  to={button.link}
                  variant="primary"
                  className={
                    i === 1
                      ? "ml-2 border border-blue-brand bg-opacity-10 text-gray-900"
                      : ""
                  }
                  prefetch="intent"
                  icon={true}
                >
                  {button.title}{" "}
                  <Icon
                    id={button.icon}
                    className={`absolute right-0 m-[0.438rem] h-[2.5rem] w-[2.5rem] rounded-full ${i === 0 ? "bg-white bg-opacity-35" : "bg-blue-brand"} fill-white p-[0.6rem]`}
                  />
                </LinkButton>
              ))}
            </div>
            <div
              className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div>
                <img src={videobanner.stat.image} width={90} height={90}></img>
              </div>
              <div className="italic text-gray-600 dark:text-white">
                <blockquote className="italic leading-7">
                  {videobanner.stat.quotes}
                </blockquote>
                <p className="mt-1 font-bold">{videobanner.stat.author}</p>
              </div>
            </div>
          </div>
          {videobanner.image && (
            <div>
              <div
                className="relative overflow-hidden rounded-2xl"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <figure className="relative z-[0] rounded-[.4rem] shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] before:absolute before:left-0 before:top-0 before:z-[1] before:h-full before:w-full before:bg-[rgba(0,0,0,0.5)]">
                  {videobanner.video && (
                    <a
                      href={videobanner.video}
                      className="group/play ripple-1 ripple-2 absolute inset-0 z-[1] m-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-white leading-none text-gray-900 before:absolute before:inset-0 before:z-[-1] before:block before:animate-[ripple-1_2s_infinite_ease-in-out] before:rounded-full before:!bg-inherit before:opacity-80 before:content-[''] after:absolute after:inset-0 after:z-[-1] after:block after:animate-[ripple-2_2s_infinite_ease-in-out] after:rounded-[50%] after:!bg-inherit after:opacity-60 after:content-[''] after:[animation-delay:.5s]"
                      data-glightbox
                    >
                      <Icon
                        id="play"
                        className="ml-[0.15rem] fill-current transition-all duration-300 ease-linear group-hover/play:scale-110"
                        aria-hidden="true"
                      />
                    </a>
                  )}
                  <img
                    className="w-full rounded-[.4rem]"
                    src={videobanner.image}
                    alt={videobanner.title}
                  ></img>
                </figure>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
