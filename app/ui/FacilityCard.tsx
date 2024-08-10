import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

// Define the type for each facility item
interface FacilityItemProps {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

// Define the type for the `facilities` object
interface FacilityProps {
  subtitle: string;
  title: string;
  facilities: FacilityItemProps[];
}

// Define the props for the FacilityCard component
interface FacilityCardProps {
  facility: FacilityProps;
}

export default function FacilityCard({ facility }: FacilityCardProps) {
  return (
    <section className="relative bg-blue-brand/10">
      <div className="container mx-auto px-4 py-14 lg:px-12 lg:py-24">
        <div className="mb-16 text-center">
          <span className="mb-5 inline-block text-xl font-medium uppercase leading-[1.35] tracking-[0.03rem] text-blue-brand">
            {facility.subtitle}
          </span>
          <h3 className="text-center text-4xl font-bold capitalize text-gray-900 dark:text-white lg:text-[2.625rem]">
            {facility.title}
          </h3>
        </div>
        <Swiper
          spaceBetween={30}
          loop={true}
          navigation={false}
          pagination={{ clickable: true }}
          breakpoints={{
            // when window width is >= 640px (tablet)
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 1024px (desktop)
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation, Pagination]}
          className="facility"
        >
          {facility.facilities.map((item, i) => (
            <SwiperSlide key={item.id}>
              <div
                className="relative overflow-hidden rounded-2xl bg-blue-brand/10 px-[1.813rem] py-[2rem] text-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {item.image && (
                  <div className="mb-[1.125rem]">
                    <img
                      src={item.image}
                      className="inline-block h-24 w-24"
                      alt={item.title}
                    ></img>
                  </div>
                )}
                <a
                  className="h5 text-lg font-bold text-gray-900 duration-500 ease-in-out hover:text-blue-brand focus:text-blue-brand dark:text-white dark:hover:text-blue-brand dark:focus:text-blue-brand"
                  href={item.link}
                >
                  {item.title}
                </a>
                <p className="mt-2 leading-[1.5] text-gray-600 dark:text-white/60">
                  {item.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
