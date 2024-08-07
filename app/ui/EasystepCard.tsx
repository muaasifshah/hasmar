import cx from "clsx";
// Define the type for the `easystep` object
interface EasystepProps {
  easystep: {
    subtitle: string;
    title: string;
    image: string;
    stats: { title: string; description: string }[];
  };
}

export default function EasystepCard({ easystep }: EasystepProps) {
  return (
    <section
      className={`relative overflow-hidden bg-blue-brand/10 dark:bg-gray-900`}
    >
      <div className="container mx-auto space-y-10 px-4 py-14 lg:space-y-14 lg:px-12 lg:py-24">
        <div className="text-center">
          <span className="mb-5 inline-block text-xl font-medium uppercase leading-[1.35] tracking-[0.03rem] text-blue-brand">
            {easystep.subtitle}
          </span>
          <h3 className="mb-4 text-4xl font-bold capitalize text-gray-900 dark:text-white lg:text-[2.625rem]">
            {easystep.title}
          </h3>
        </div>
        <div
          className={`grid grid-cols-1 items-center gap-x-16 gap-y-10 ${easystep.image ? "lg:grid-cols-2" : "grid-cols-1"}`}
        >
          <div>
            <ul className="space-y-4 md:space-y-10">
              {easystep.stats.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start space-x-5 text-gray-900"
                >
                  <div
                    className={cx(
                      "relative h-12 w-12 flex-shrink-0 rounded-full bg-blue-brand text-center text-2xl font-bold leading-[3rem] text-white before:absolute before:left-6 before:top-[100%] before:-z-10 before:h-[150%] before:w-[1px] before:border before:border-dashed before:border-blue-brand dark:text-white [&.last]:before:hidden",
                      { last: i === easystep.stats.length - 1 },
                    )}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="mb-0 text-[1.375rem] font-bold capitalize tracking-wide max-sm:text-lg max-sm:leading-6">
                      {item.title}
                    </h4>
                    <p className="leading-6 max-sm:mt-1.5 max-sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {easystep.image && (
            <div>
              <div
                className="relative overflow-hidden rounded-2xl"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <figure className="relative z-[0] rounded-[.4rem] shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                  <img
                    className="w-full rounded-[.4rem]"
                    src={easystep.image}
                    alt={easystep.title}
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
