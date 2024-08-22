import { IconName } from "public/icons/name";
import { LinkButton } from "./Form/Button";
import Icon from "./Icon/Icon";
// Define the type for the `perks` object
interface PerksCardProps {
  perks: {
    subtitle: string;
    title: string;
    stats: { title: string }[];
    buttons: { icon: IconName; title: string; link: string }[];
  };
}

export default function PerksCard({ perks }: PerksCardProps) {
  return (
    <section className="relative bg-blue-brand/10 dark:bg-gray-800">
      <div className="container mx-auto space-y-10 px-4 py-14 lg:space-y-14 lg:px-12 lg:py-24">
        <div className="text-center">
          <span className="mb-5 inline-block text-xl font-medium uppercase leading-[1.35] tracking-[0.03rem] text-blue-brand">
            {perks.subtitle}
          </span>
          <h3 className="mb-4 text-4xl font-bold capitalize text-gray-900 dark:text-white lg:text-[2.625rem]">
            {perks.title}
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {perks.stats.map((item, i) => (
            <div
              className="flex items-center rounded-2xl bg-white p-3.5"
              data-aos="fade-up"
              data-aos-delay="100"
              key={i}
            >
              <Icon
                id="check-circle"
                className="mr-2 h-6 w-6 fill-blue-brand"
              />
              <h4 className="text-lg font-bold capitalize tracking-wide text-gray-900 dark:text-white">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
        <div
          className="space-y-4 text-center sm:space-x-4 sm:space-y-0"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {perks.buttons.map((button, i) => (
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
      </div>
    </section>
  );
}
