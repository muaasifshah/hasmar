import Icon from "./Icon/Icon";
// Define the type for the `hero` object
interface AboutProps {
  id: string;
  subtitle: string;
  title: string;
  description: string[];
  image: string;
  video: string;
  buttons: { title: string; link: string }[];
}

// Define the props for the HeroCard component
interface AboutCardProps {
  about: AboutProps[];
  path?: string;
}

export default function AboutCard({ about, path = "" }: AboutCardProps) {
  return (
    <section
      className={`relative z-0 overflow-hidden ${path !== "/facilitators" ? "bg-gradient-to-b from-transparent to-blue-brand/10 dark:to-gray-800" : ""} dark:bg-gray-900`}
    >
      <div className="container mx-auto space-y-14 px-4 py-14 lg:space-y-24 lg:px-12 lg:py-24">
        {about &&
          about.map((item, i) => (
            <div
              className={`grid grid-cols-1 items-center gap-x-16 gap-y-10 ${about.length > 1 ? "lg:grid-cols-2" : "grid-cols-1"}`}
              key={i}
            >
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="mb-5 inline-block text-xl font-medium uppercase leading-[1.35] tracking-[0.03rem] text-blue-brand">
                  {item.subtitle}
                </span>
                <h3 className="mb-4 text-4xl font-bold capitalize text-gray-900 dark:text-white lg:text-[2.625rem]">
                  {item.title}
                </h3>
                <div className="space-y-8 text-base leading-[2] text-gray-900 dark:text-white">
                  {item.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
              {item.image && (
                <div>
                  <div
                    className="relative overflow-hidden rounded-2xl"
                    data-aos={i % 2 === 1 ? "fade-right" : "fade-left"}
                    data-aos-delay="100"
                  >
                    <figure className="relative z-[0] rounded-[.4rem] shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] before:absolute before:left-0 before:top-0 before:z-[1] before:h-full before:w-full before:bg-[rgba(0,0,0,0.5)]">
                      {item.video && (
                        <a
                          href={item.video}
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
                        src={item.image}
                        alt={item.title}
                      ></img>
                    </figure>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </section>
  );
}
