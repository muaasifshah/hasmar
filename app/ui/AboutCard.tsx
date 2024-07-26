import { PrimaryButtonLink, WhiteButtonLink } from "./Buttons";
import AboutImg01 from "../../public/img/aboutImg01.jpg";
import AboutImg02 from "../../public/img/aboutImg02.jpg";

export default function AboutCard() {
  return (
    <section className="relative z-0 overflow-hidden">
      <div className="container mx-auto px-4 py-8 lg:px-12 lg:py-40">
        <span className="mb-4 inline-block rounded-md border border-blue-brand bg-blue-brand/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-blue-brand">
          ABOUT US
        </span>
        <h3 className="mb-4 text-4xl font-bold capitalize text-gray-900">
          Who We Are
        </h3>
      </div>
      <div
        className="absolute inset-0 z-[-1] h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${AboutImg01})` }}
      ></div>
    </section>
  );
}
