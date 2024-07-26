import { PrimaryButtonLink, WhiteButtonLink } from "./Buttons";

// Define the type for the `hero` object
interface AboutProps {
  id: string;
  subtitle: string;
  title: string;
  description: string;
  image: string;
  buttons: { title: string; link: string }[];
}

// Define the props for the HeroCard component
interface AboutCardProps {
  about: AboutProps;
}

export default function AboutCard({ about }: AboutCardProps) {
  return (
    <section className="relative z-0 overflow-hidden">
      <div className="container mx-auto px-4 py-8 lg:px-12 lg:py-40">
        <span className="mb-4 inline-block rounded-md border border-blue-brand bg-blue-brand/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-blue-brand">
          {about.subtitle}
        </span>
        <h3 className="mb-4 text-4xl font-bold capitalize text-gray-900">
          {about.title}
        </h3>
      </div>
      <div
        className="absolute inset-0 z-[-1] h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${about.image})` }}
      ></div>
    </section>
  );
}
