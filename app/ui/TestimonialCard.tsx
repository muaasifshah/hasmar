import { Swiper, SwiperSlide } from "swiper/react";
import Icon from "./Icon/Icon";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

// Define the type for each testimonial item
interface TestimonialItemProps {
  id: string;
  title: string;
  designation: string;
  description: string;
  image: string;
  link: string;
}

// Define the type for the `testimonial` object
interface TestimonialProps {
  subtitle: string;
  title: string;
  testimonials: TestimonialItemProps[];
}

// Define the props for the TestimonialCard component
interface TestimonialCardProps {
  testimonial: TestimonialProps;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <section className="relative">
      <div className="container mx-auto px-4 py-14 lg:px-12 lg:py-24">
        <div className="mb-16 text-center">
          <span className="mb-5 inline-block text-xl font-medium uppercase leading-[1.35] tracking-[0.03rem] text-blue-brand">
            {testimonial.subtitle}
          </span>
          <h3 className="text-center text-4xl font-bold capitalize text-gray-900 dark:text-white lg:text-[2.625rem]">
            {testimonial.title}
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
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation, Pagination]}
          className="testimonial"
        >
          {testimonial.testimonials.map((item, i) => (
            <SwiperSlide key={item.id}>
              <div
                className="relative overflow-hidden rounded-2xl bg-blue-brand/10 px-[1.813rem] py-[2rem]"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Icon
                  id="quote-left"
                  className={`h-[2.5rem] w-[2.5rem] fill-blue-brand`}
                />
                <p className="mt-6 leading-[1.8] text-gray-900 dark:text-white">
                  {item.description}
                </p>
                <div className="mt-6 flex items-center">
                  {item.image && (
                    <img
                      src={item.image}
                      className="h-16 w-16 rounded-full shadow dark:shadow-gray-800"
                      alt={item.title}
                    ></img>
                  )}
                  <div className="ps-4">
                    <a
                      className="h5 text-lg font-bold text-gray-900 duration-500 ease-in-out hover:text-blue-brand focus:text-blue-brand dark:text-white dark:hover:text-blue-brand dark:focus:text-blue-brand"
                      href={item.link}
                    >
                      {item.title}
                    </a>
                    <p className="text-[0.938rem] text-gray-600 dark:text-white/60">
                      {item.designation}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
