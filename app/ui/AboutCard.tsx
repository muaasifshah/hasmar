import { useState, useEffect } from "react";
import "glightbox/dist/css/glightbox.min.css";
import Icon from "./Icon/Icon";
// Define the type for the `hero` object
interface AboutProps {
  id: string;
  subtitle: string;
  title: string;
  description: string;
  image: string;
  video: string;
  buttons: { title: string; link: string }[];
}

// Define the props for the HeroCard component
interface AboutCardProps {
  about: AboutProps[];
}

export default function AboutCard({ about }: AboutCardProps) {
  const [GLightbox, setGLightbox] = useState<any>(null);

  useEffect(() => {
    // Dynamically import GLightbox only in the browser
    const loadGLightbox = async () => {
      const module = await import("glightbox");
      setGLightbox(() => module.default);
    };

    loadGLightbox();
  }, []);

  useEffect(() => {
    if (GLightbox) {
      const lightbox = GLightbox({
        selector: "[data-glightbox]",
      });

      // Cleanup the lightbox instance when the component unmounts
      return () => {
        lightbox.destroy();
      };
    }
  }, [GLightbox]);
  return (
    <section className="bg-custom-gradient relative z-0 overflow-hidden">
      <div className="container mx-auto space-y-14 px-4 py-14 lg:space-y-28 lg:px-12 lg:py-28">
        {about &&
          about.map((item, i) => (
            <div
              className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2"
              key={i}
            >
              <div className={i % 2 === 1 ? "order-1" : ""}>
                <span className="mb-3 inline-block text-lg font-medium uppercase leading-[1.35] tracking-[0.03rem] text-blue-brand">
                  {item.subtitle}
                </span>
                <h3 className="mb-4 text-4xl font-bold capitalize text-gray-900">
                  {item.title}
                </h3>
                <p className="text-base leading-[2] text-gray-900">
                  {item.description}
                </p>
              </div>
              <div>
                <div
                  className="relative inline-block overflow-hidden rounded-2xl"
                  data-aos={i % 2 === 1 ? "fade-right" : "fade-left"}
                  data-aos-delay="100"
                >
                  <a
                    href={item.video}
                    className="btn-play ripple-1 ripple-2 absolute inset-0 z-0 m-auto inline-flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-[100%] bg-white text-[calc(1.355rem_+_1.26vw)] leading-none text-gray-900 before:absolute before:inset-0 before:z-[-1] before:block before:animate-[ripple-1_2s_infinite_ease-in-out] before:rounded-[50%] before:!bg-inherit before:opacity-80 before:content-[''] after:absolute after:inset-0 after:z-[-1] after:block after:animate-[ripple-2_2s_infinite_ease-in-out] after:rounded-[50%] after:!bg-inherit after:opacity-60 after:content-[''] after:[animation-delay:.5s] xl:text-[2.3rem]"
                    data-glightbox
                  >
                    <Icon
                      id="play"
                      className="relative z-[2] ml-[0.15rem] fill-inherit text-[calc(1.355rem_+_1.26vw)]"
                      aria-hidden="true"
                    />
                  </a>
                  <figure className="rounded-[.4rem] shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                    <img
                      className="rounded-[.4rem]"
                      src={item.image}
                      alt={item.title}
                    ></img>
                  </figure>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
