import { LinkButton } from "./Form/Button";
import Icon from "./Icon/Icon";

// Define the type for the `hero` object
interface HeroProps {
  id: string;
  subtitle: string;
  title: string;
  description: string;
  image: string;
  buttons: { title: string; link: string }[];
}

// Define the props for the HeroCard component
interface HeroCardProps {
  hero: HeroProps;
}

export default function HeroCard({ hero }: HeroCardProps) {
  return (
    <section className="relative z-0 overflow-hidden">
      <div className="container mx-auto px-4 py-14 text-center lg:px-12 lg:py-40">
        <h1
          className="mb-3 font-mono text-6xl font-medium leading-[.99] tracking-[1px] text-gray-900 md:text-5xl md:leading-[.99] lg:text-8xl lg:leading-[.99]"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <span className="text-3xl md:text-4xl lg:text-6xl">
            {hero.subtitle}
          </span>
          <br></br>
          {hero.title}
        </h1>
        <p
          className="mb-8 text-lg font-normal text-gray-900 sm:px-16 lg:mb-16 lg:text-xl xl:px-48"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {hero.description}
        </p>
        <div
          className="flex flex-wrap justify-center space-y-4 sm:space-x-4 sm:space-y-0"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {hero.buttons.map((button, i) => (
            <LinkButton
              key={i}
              to={button.link}
              variant={i === 0 ? "white" : "primary"}
              className={i === 1 ? "ml-2" : ""}
              prefetch="intent"
              icon={true}
            >
              {button.title}{" "}
              <Icon
                id="arrow-long-right"
                className={`absolute right-0 m-[0.438rem] h-[2.5rem] w-[2.5rem] rounded-full ${i === 0 ? "bg-blue-brand" : "bg-white bg-opacity-35"} fill-white p-[0.6rem]`}
              />
            </LinkButton>
          ))}
        </div>
      </div>
      <div
        className="absolute inset-0 z-[-1] h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.image})` }}
      ></div>
    </section>
  );
}
