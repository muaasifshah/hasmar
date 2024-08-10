import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

// Define the type for each sponsor item
interface SponsorItemProps {
  id: string;
  image: string;
  link: string;
}

// Define the type for the `sponsors` object
interface SponsorProps {
  subtitle: string;
  title: string;
  sponsors: SponsorItemProps[];
}

// Define the props for the SponsorCard component
interface SponsorCardProps {
  sponsor: SponsorProps;
}

export default function SponsorCard({ sponsor }: SponsorCardProps) {
  return (
    <section className="relative bg-blue-brand">
      <div className="container mx-auto px-4 py-14 lg:px-12 lg:py-24">
        <div className="mb-16 text-center">
          <span className="mb-5 inline-block text-xl font-medium uppercase leading-[1.35] tracking-[0.03rem] text-white">
            {sponsor.subtitle}
          </span>
          <h3 className="text-center text-4xl font-bold capitalize text-white lg:text-[2.625rem]">
            {sponsor.title}
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
              slidesPerView: 3,
              spaceBetween: 20,
            },
            // when window width is >= 1024px (desktop)
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation, Pagination]}
          className="sponsor"
        >
          {sponsor.sponsors.map((item, i) => (
            <SwiperSlide key={item.id}>
              <div
                className="relative overflow-hidden rounded-2xl bg-white px-[1.813rem] py-[2rem] text-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {item.image && (
                  <a className="duration-500 ease-in-out" href={item.link}>
                    <img src={item.image} className="inline-block" alt=""></img>
                  </a>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
