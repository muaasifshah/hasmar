// Define the type for each process item
interface ProcessProps {
  process: {
    title: string;
    stats: { title: string; description: string }[];
  };
}

export default function ProcessCard({ process }: ProcessProps) {
  return (
    <section className="relative bg-blue-brand text-white">
      <div className="container mx-auto px-4 py-14 lg:px-12 lg:py-24">
        <div className="mb-14 text-center">
          <h3 className="capitaliz text-center text-4xl font-bold lg:text-[2.625rem]">
            {process.title}
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {process.stats.map((item, i) => (
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="100"
              key={i}
            >
              <div className="mb-1.5 inline-block h-16 w-16 rounded-xl bg-white/20 text-center text-4xl font-bold capitalize leading-[4rem] tracking-wide lg:mb-6">
                {i + 1}
              </div>
              <h4 className="mb-1.5 text-[1.375rem] font-bold capitalize tracking-wide lg:mb-2">
                {item.title}
              </h4>
              <p className="leading-8">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
