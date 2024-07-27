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
  about: AboutProps;
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
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
          <div>
            <span className="mb-3 inline-block text-lg font-medium uppercase leading-[1.35] tracking-[0.03rem] text-blue-brand">
              {about.subtitle}
            </span>
            <h3 className="mb-4 text-4xl font-bold capitalize text-gray-900">
              {about.title}
            </h3>
            <p className="text-base leading-[2] text-gray-900">
              {about.description}
            </p>
          </div>
          <div>
            <div
              className="relative inline-block overflow-hidden rounded-2xl"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <a
                href={about.video}
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
                  src={about.image}
                  alt={about.title}
                ></img>
              </figure>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
          <div className="order-1">
            <span className="mb-3 inline-block text-lg font-medium uppercase leading-[1.35] tracking-[0.03rem] text-blue-brand">
              WHY CHOOSE US
            </span>
            <h3 className="mb-4 text-4xl font-bold capitalize text-gray-900">
              Why Adopt the HaSMaR Model
            </h3>
            <p className="text-base leading-[2] text-gray-900">
              HaSMaR Model, developed by our team of experts, is a comprehensive
              framework designed to guide couples towards sustainable solutions
              and profound transformations. The HaSMaR Model focuses on
              identifying and leveraging the unique strengths within your
              relationship. By recognizing and building upon the positive
              aspects of your partnership, you'll develop a strong foundation
              for growth and resilience.
              <br></br>
              <br></br>
              From communication breakdowns to unresolved conflicts, every
              relationship faces its own set of challenges. The HaSMaR Model
              provides practical strategies and techniques to effectively
              address these issues, fostering open dialogue and understanding
              between partners.
            </p>
          </div>
          <div className="order-0">
            <div
              className="relative inline-block overflow-hidden rounded-2xl"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <figure className="rounded-[.4rem] shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <img
                  className="rounded-[.4rem]"
                  src={about.image}
                  alt={about.title}
                ></img>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
