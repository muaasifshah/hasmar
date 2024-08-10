// Define the type for each features item
interface Features {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface FeaturesProps {
  features: Features[];
}

export default function FeaturesCard({ features }: FeaturesProps) {
  return (
    <section className="relative bg-blue-brand/10 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-14 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, i) => (
            <div className="" data-aos="fade-up" data-aos-delay="100" key={i}>
              {item.image && (
                <figure className="relative mb-4">
                  <img
                    width={67}
                    height={67}
                    src={item.image}
                    alt={item.title}
                  ></img>
                </figure>
              )}
              <h4 className="mb-1.5 text-[1.375rem] font-bold capitalize tracking-wide text-gray-900 dark:text-white lg:mb-2">
                {item.title}
              </h4>
              <p className="leading-8 text-gray-600 dark:text-white">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
