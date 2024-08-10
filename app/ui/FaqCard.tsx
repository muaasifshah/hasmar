import React, { useState } from "react";

// Define the type for each FAQ item
interface Faq {
  id: string;
  title: string;
  description: string;
}

interface FaqProps {
  faq: Faq[];
  initialOpenIndex?: number; // Optional prop to set the initial open index
}

export default function FaqCard({ faq, initialOpenIndex = 0 }: FaqProps) {
  // Initialize the state with `null` for no open card by default
  const [openIndex, setOpenIndex] = useState<number | null>(initialOpenIndex);

  // Handler to toggle the accordion panel
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative">
      <div className="container mx-auto px-4 py-14 lg:px-12 lg:py-24">
        <div className="space-y-4">
          {faq.map((item, index) => (
            <div
              className="overflow-hidden rounded-xl border border-blue-brand bg-blue-brand/10 px-3 py-3 text-gray-900 md:px-6 md:py-4"
              key={item.id}
            >
              <button
                className="flex w-full items-center justify-between text-start text-xl font-bold capitalize tracking-wide focus:outline-none max-sm:text-sm"
                onClick={() => handleToggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`panel-${index}`}
              >
                {item.title}
                <svg
                  className={`ml-1.5 h-6 w-6 rounded-md bg-blue-brand p-1 text-white transition-transform duration-300 md:h-10 md:w-10 md:rounded-lg md:p-2 ${openIndex === index ? "rotate-180" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  {openIndex === index ? (
                    <path
                      d="M5 12h14"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ) : (
                    <>
                      <path
                        d="M12 5v14"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 12h14"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </>
                  )}
                </svg>
              </button>
              <div
                id={`panel-${index}`}
                className={`transition-max-height overflow-hidden duration-500 ease-in-out ${openIndex === index ? "max-h-screen" : "max-h-0"}`}
                aria-labelledby={`button-${index}`}
              >
                <div className="mt-2 border-t border-blue-brand/40 pt-2 leading-8 md:mt-5 md:pt-5">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
