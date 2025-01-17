import { Features } from "./types";

export default function FeatureCards({ features }: Features) {
  return (
    <>
    {features.map((feature, i) => (
            <div className="" data-aos="fade-up" data-aos-delay="100" key={i}>
              {feature.image && (
                <figure className="relative mb-4">
                  <img
                    width={67}
                    height={67}
                    src={feature.image}
                    alt={feature.title}
                  ></img>
                </figure>
              )}
              <h4 className="mb-1.5 text-[1.375rem] font-bold capitalize tracking-wide text-gray-900 dark:text-white lg:mb-2">
                {feature.title}
              </h4>
              <p className="leading-8 text-gray-600 dark:text-white">
                {feature.description}
              </p>
            </div>
          ))}
    </>
  );
}