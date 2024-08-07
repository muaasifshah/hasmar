import { Button } from "./Button";
import Icon from "./Icon/Icon";

// Define the type for each couplesvideo item
interface Couplesvideo {
  id: string;
  title: string;
  description: string;
  image: string;
  video: string;
  buttonTitle: string;
  link: string;
}

interface CouplesvideoProps {
  couplesvideo: Couplesvideo[];
}

export default function CouplesvideoCard({ couplesvideo }: CouplesvideoProps) {
  return (
    <section className="relative">
      <div className="container mx-auto px-4 py-14 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {couplesvideo.map((item, i) => (
            <div
              className="relative overflow-hidden rounded-3xl bg-blue-brand/10 p-6 text-center lg:p-14"
              data-aos="fade-up"
              data-aos-delay="100"
              key={i}
            >
              <h4 className="mb-2 text-2xl font-bold capitalize tracking-wide text-gray-900 dark:text-white lg:mb-3.5">
                {item.title}
              </h4>
              <p className="mb-5 text-gray-600 dark:text-white lg:mb-8">
                {item.description}
              </p>
              {item.image && (
                <figure className="relative z-[0] overflow-hidden rounded-3xl shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] before:absolute before:left-0 before:top-0 before:z-[1] before:h-full before:w-full before:bg-[rgba(0,0,0,0.5)]">
                  {item.video && (
                    <a
                      href={item.video}
                      className="group/play ripple-1 ripple-2 absolute inset-0 z-[1] m-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-white leading-none text-gray-900 before:absolute before:inset-0 before:z-[-1] before:block before:animate-[ripple-1_2s_infinite_ease-in-out] before:rounded-full before:!bg-inherit before:opacity-80 before:content-[''] after:absolute after:inset-0 after:z-[-1] after:block after:animate-[ripple-2_2s_infinite_ease-in-out] after:rounded-[50%] after:!bg-inherit after:opacity-60 after:content-[''] after:[animation-delay:.5s] lg:h-20 lg:w-20"
                      data-glightbox
                    >
                      <Icon
                        id="play"
                        className="ml-[0.15rem] fill-current transition-all duration-300 ease-linear group-hover/play:scale-110"
                        aria-hidden="true"
                      />
                    </a>
                  )}
                  <img
                    className="h-full w-full"
                    src={item.image}
                    alt={item.title}
                  ></img>
                </figure>
              )}
              <Button
                to={item.link}
                variant="primary"
                className="mt-6 lg:mt-10"
                prefetch="intent"
                icon={true}
              >
                {item.buttonTitle}{" "}
                <Icon
                  id="play"
                  className={`absolute right-0 m-[0.438rem] h-[2.5rem] w-[2.5rem] rounded-full bg-white bg-opacity-35 fill-white pb-[0.6rem] pl-[0.75rem] pr-[0.6rem] pt-[0.6rem] max-xs:m-[.4rem] max-xs:h-[2.35rem] max-xs:w-[2.35rem]`}
                />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
