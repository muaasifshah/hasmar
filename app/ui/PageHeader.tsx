// Define the props for the PageHeader component
interface PageHeaderProps {
  pageheader: {
    image: string;
    subtitle: string;
    title: string;
  };
}

export default function PageHeader({ pageheader }: PageHeaderProps) {
  return (
    <section
      className="relative z-0 flex items-center overflow-hidden bg-top bg-no-repeat before:absolute before:inset-0 before:z-[-1] before:bg-gray-900 before:opacity-50 lg:min-h-[25.625rem]"
      style={{ backgroundImage: `url(${pageheader.image})` }}
    >
      <div className="container mx-auto w-full px-4 py-14 lg:px-12 lg:py-24">
        <div
          className="text-center text-white"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 className="text-center text-4xl font-bold capitalize tracking-wide lg:text-5xl">
            {pageheader.title}
          </h3>
          <p className="mt-2 text-lg font-medium leading-[1.35] tracking-[0.03rem] lg:mt-3 lg:text-[1.375rem]">
            {pageheader.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
