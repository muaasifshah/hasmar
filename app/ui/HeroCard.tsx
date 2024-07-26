import { PrimaryButtonLink, WhiteButtonLink } from "./Buttons";
import HeroImg from "../../public/img/hero.jpg";

export default function HeroCard() {
  return (
    <section className="relative z-0 overflow-hidden">
      <div className="container mx-auto px-4 py-8 text-center lg:px-12 lg:py-40">
        <h1
          className="mb-3 font-mono text-6xl font-medium leading-[.99] tracking-[1px] text-gray-900 md:text-5xl md:leading-[.99] lg:text-8xl lg:leading-[.99]"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <span className="text-3xl md:text-4xl lg:text-6xl">Welcome to</span>
          <br></br>
          The HaSMaR Institute
        </h1>
        <p
          className="mb-8 text-lg font-normal text-gray-900 sm:px-16 lg:mb-16 lg:text-xl xl:px-48"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We Enable Individuals and Couples to Create Honorable and Sustainable
          Marriage Relationships.
        </p>
        <div
          className="flex flex-wrap justify-center space-y-4 sm:space-x-4 sm:space-y-0"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <WhiteButtonLink
            prefetch="intent"
            to="/"
            className=""
            icon={true}
            children="Become a Facilitator"
          />
          <PrimaryButtonLink
            prefetch="intent"
            to="/"
            className="ml-2"
            icon={true}
            children="Take the Assessment"
          />
        </div>
      </div>
      <div
        className="absolute inset-0 z-[-1] h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImg})` }}
      ></div>
    </section>
  );
}
