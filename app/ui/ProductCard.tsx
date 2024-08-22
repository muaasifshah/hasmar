import { LinkButton } from "./Form/Button";
import Icon from "./Icon/Icon";

// Define the type for each product item
interface ProductItemProps {
  id: string;
  title: string;
  actualPrice: string;
  sellingPrice: string;
  description: string[];
  image: string;
  video: string;
  buttonTitle: string;
  link: string;
}

// Define the type for the `product` object
interface ProductProps {
  bgImage: string;
  subtitle: string;
  title: string;
  products: ProductItemProps[];
}

// Define the props for the ProductCard component
interface ProductCardProps {
  product: ProductProps;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <section
      className="relative z-0 bg-top bg-no-repeat before:absolute before:inset-0 before:z-[-1] before:bg-gradient-to-t before:from-gray-900 before:via-gray-900/80 before:to-gray-900/75"
      style={{ backgroundImage: `url(${product.bgImage})` }}
    >
      <div className="container mx-auto px-4 py-14 lg:px-12 lg:py-24">
        <div className="mb-16 text-center">
          <span className="mb-5 inline-block text-xl font-medium uppercase leading-[1.35] tracking-[0.03rem] text-blue-brand">
            {product.subtitle}
          </span>
          <h3 className="text-center text-4xl font-bold capitalize text-white lg:text-[2.625rem]">
            {product.title}
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {product.products.map((item, i) => (
            <div
              className="relative overflow-hidden rounded-2xl bg-white p-3 shadow shadow-gray-200 dark:border dark:border-gray-500 dark:bg-gray-800 dark:shadow-gray-800"
              data-aos="fade-up"
              data-aos-delay="100"
              key={i}
            >
              {item.image && (
                <figure className="relative z-[0] overflow-hidden rounded-2xl">
                  {item.video && (
                    <a
                      href={item.video}
                      className="group/play absolute bottom-6 left-6 z-[1] m-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#E51F1F80]/50 leading-none text-white"
                      data-glightbox
                    >
                      <Icon
                        id="play"
                        className="ml-[0.15rem] h-5 w-5 fill-current transition-all duration-300 ease-linear group-hover/play:scale-110"
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
              <div className="py-6 text-center">
                <a
                  href={item.link}
                  className="mb-2 text-[1.375rem] font-bold capitalize tracking-wide text-gray-900 duration-500 ease-in-out hover:text-blue-brand focus:text-blue-brand dark:text-white"
                >
                  {item.title}
                </a>
                <div className="text-base leading-[2] text-gray-900 dark:text-white">
                  <span className="inline text-[2.125rem] font-semibold">
                    {item.sellingPrice}
                  </span>
                  <span className="ml-1 inline text-[1.375rem] text-gray-600 line-through dark:text-white/60">
                    {item.actualPrice}
                  </span>
                </div>
                <LinkButton
                  to={item.link}
                  variant="primary"
                  className="mt-4"
                  prefetch="intent"
                  icon={true}
                >
                  {item.buttonTitle}{" "}
                  <Icon
                    id="arrow-long-right"
                    className={`absolute right-0 m-[0.438rem] h-[2.5rem] w-[2.5rem] rounded-full bg-white bg-opacity-35 fill-white p-[0.6rem] max-xs:m-[.4rem] max-xs:h-[2.35rem] max-xs:w-[2.35rem]`}
                  />
                </LinkButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
