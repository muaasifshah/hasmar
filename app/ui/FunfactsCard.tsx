import Icon from "./Icon/Icon";
import { useEffect, useRef, useState } from "react";
import CountUpWrapper from "./CountUpWrapper";
import { IconName } from "public/icons/name";

interface Funfact {
  id: string;
  icon: IconName;
  title: string;
  value: string;
}

interface FunfactsProps {
  funfacts: Funfact[];
}

export default function FunfactsCard({ funfacts }: FunfactsProps) {
  const [isInView, setIsInView] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, []);

  return (
    <section className="relative z-0 overflow-hidden bg-blue-brand dark:bg-gray-900">
      <div className="container mx-auto space-y-14 px-4 py-14 lg:space-y-24 lg:px-12 lg:py-24">
        <div
          ref={statRef}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {funfacts.map((item) => (
            <div key={item.id} data-aos="fade-up" data-aos-delay="100">
              <div className="text-center text-white">
                <Icon
                  id={item.icon}
                  className="mb-5 inline-block h-14 w-14 fill-current"
                />
                <h3 className="text-[2.5rem] font-bold">
                  <CountUpWrapper value={item.value} isInView={isInView} />
                </h3>
                <h4 className="mt-1 text-lg uppercase">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
