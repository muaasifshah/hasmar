import Icon from "./Icon/Icon";
import { useEffect, useRef, useState } from "react";
import CountUpWrapper from "./CountUpWrapper";

interface ExperienceProps {
  experience: {
    id: string;
    title: string;
    subtitle: string;
    description: string[];
    stat: { title: string; value: string };
    stats: { id: string; title: string; value: string }[];
  };
}

export default function ExperienceCard({ experience }: ExperienceProps) {
  const [isInView, setIsInView] = useState(false);
  const [progressWidth, setProgressWidth] = useState<number[]>([]);
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

  useEffect(() => {
    if (isInView) {
      // Convert stats values to a format usable for progress width
      const widths = experience.stats.map(
        (stat) => parseFloat(stat.value) || 0,
      );
      setProgressWidth(widths);
    }
  }, [isInView, experience.stats]);

  return (
    <section className="relative z-0 overflow-hidden dark:bg-gray-900">
      <div className="container mx-auto space-y-14 px-4 py-14 lg:space-y-24 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
          <div>
            <span className="mb-5 inline-block text-xl font-medium uppercase leading-[1.35] tracking-[0.03rem] text-blue-brand">
              {experience.subtitle}
            </span>
            <h3 className="mb-4 text-4xl font-bold capitalize text-gray-900 dark:text-white lg:text-[2.625rem]">
              <span dangerouslySetInnerHTML={{ __html: experience.title }} />
            </h3>
            <div className="my-10 flex flex-col gap-5 lg:flex-row lg:items-center">
              <div>
                <Icon
                  id="trophy"
                  className="h-[5.625rem] w-[5.625rem] rounded-xl bg-blue-brand fill-white p-[1rem]"
                />
              </div>
              <div className="text-gray-900 dark:text-white">
                <h5 className="text-5xl font-bold leading-none">
                  <div ref={statRef}>
                    <CountUpWrapper
                      value={experience.stat.value}
                      isInView={isInView}
                    />
                  </div>
                </h5>
                <p className="mt-1 text-base">{experience.stat.title}</p>
              </div>
            </div>
            <div className="space-y-1 text-base leading-[2] text-gray-900 dark:text-white">
              {experience.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div>
            <div className="relative space-y-12">
              {experience.stats.map((item, i) => (
                <div key={i}>
                  <div className="mb-3 flex items-center justify-between gap-6 text-gray-900 dark:text-white">
                    <h2 className="text-lg font-medium">{item.title}</h2>
                    <h4 className="text-base font-medium">
                      <CountUpWrapper value={item.value} isInView={isInView} />
                    </h4>
                  </div>
                  <div className="mt-1 flex h-2 w-full overflow-hidden rounded-full bg-blue-brand/10">
                    <div
                      className="flex flex-col justify-center overflow-hidden bg-blue-brand transition-width duration-1000 ease-in-out"
                      role="progressbar"
                      aria-label={`${item.title} progress`}
                      style={{ width: `${progressWidth[i] || 0}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
