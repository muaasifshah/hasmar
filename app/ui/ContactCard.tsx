import { useState } from "react";
import { Form } from "@remix-run/react";
import { IconName } from "public/icons/name";
import Icon from "./Icon/Icon";

// Define the types for form fields and contact object
interface FormField {
  type:
    | "text"
    | "email"
    | "password"
    | "textarea"
    | "submit"
    | "reset"
    | "button";
  name: string;
  text: string;
  required?: boolean;
}

interface ContactProps {
  contact: {
    subtitle: string;
    title: string;
    stat: { icon: IconName; title: string; description: string }[];
    form: FormField[];
  };
}

export default function ContactCard({ contact }: ContactProps) {
  // State to manage form field values and errors
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Utility function to get a valid button type
  const getButtonType = (
    type: string,
  ): "submit" | "reset" | "button" | undefined => {
    return ["submit", "reset", "button"].includes(
      type as "submit" | "reset" | "button",
    )
      ? (type as "submit" | "reset" | "button")
      : undefined;
  };

  // Handle form field changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form fields
  const validate = (): boolean => {
    let isValid = true;
    const newErrors: { [key: string]: string } = {};

    contact.form.forEach((field) => {
      if (field.required && !formValues[field.name]) {
        newErrors[field.name] = "This field is required.";
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission logic here
      console.log("Form submitted successfully with values:", formValues);
    }
  };

  return (
    <section className="relative z-0 overflow-hidden dark:bg-gray-900">
      <div className="container mx-auto space-y-14 px-4 py-14 lg:space-y-24 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
          <div>
            <span className="mb-3 inline-block text-xl font-medium uppercase leading-[1.35] tracking-[0.03rem] text-blue-brand">
              {contact.subtitle}
            </span>
            <h3 className="mb-14 text-2xl font-bold capitalize text-gray-900 dark:text-white lg:text-[2.25rem]">
              {contact.title}
            </h3>
            <div className="space-y-8">
              {contact.stat.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 border-t-[1px] border-blue-brand/30 pt-8 text-gray-900 first:border-t-0 first:pt-0 dark:text-white"
                >
                  <div className="flex h-[3.75rem] w-[3.75rem] flex-shrink-0 items-center justify-center rounded-full bg-blue-brand/10 fill-blue-brand text-center">
                    <Icon
                      id={item.icon}
                      className="inline-block h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-base">{item.title}</p>
                    <h4 className="text-xl font-semibold">
                      {item.description}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative" data-aos="fade-up" data-aos-delay="100">
            <Form
              className="flex flex-col gap-7"
              method="post"
              action="#"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-7 md:flex-row">
                {contact.form
                  .filter(
                    (item) =>
                      item.type !== "textarea" && item.type !== "submit",
                  )
                  .slice(0, 2)
                  .map((item, i) => (
                    <div key={i} className="w-full">
                      <input
                        type={item.type}
                        name={item.name}
                        id={item.name}
                        placeholder={item.text}
                        required={item.required}
                        value={formValues[item.name] || ""}
                        onChange={handleChange}
                        className={`w-full rounded-xl border border-blue-brand/30 px-5 py-3.5 text-sm text-gray-700 focus:border-blue-brand focus:outline-none focus:ring-1 focus:ring-blue-brand ${errors[item.name] ? "border-red-500" : ""}`}
                      />
                      {errors[item.name] && (
                        <p className="text-red-500 text-sm">
                          {errors[item.name]}
                        </p>
                      )}
                    </div>
                  ))}
              </div>
              <div className="flex flex-col gap-7 md:flex-row">
                {contact.form
                  .filter(
                    (item) =>
                      item.type !== "textarea" && item.type !== "submit",
                  )
                  .slice(2, 4)
                  .map((item, i) => (
                    <div key={i} className="w-full">
                      <input
                        type={item.type}
                        name={item.name}
                        id={item.name}
                        placeholder={item.text}
                        required={item.required}
                        value={formValues[item.name] || ""}
                        onChange={handleChange}
                        className={`w-full rounded-xl border border-blue-brand/30 px-5 py-3.5 text-sm text-gray-700 focus:border-blue-brand focus:outline-none focus:ring-1 focus:ring-blue-brand ${errors[item.name] ? "border-red-500" : ""}`}
                      />
                      {errors[item.name] && (
                        <p className="text-red-500 text-sm">
                          {errors[item.name]}
                        </p>
                      )}
                    </div>
                  ))}
              </div>
              {contact.form
                .filter((item) => item.type === "textarea")
                .map((item, i) => (
                  <div key={i} className="w-full">
                    <textarea
                      name={item.name}
                      id={item.name}
                      placeholder={item.text}
                      required={item.required}
                      value={formValues[item.name] || ""}
                      onChange={handleChange}
                      className={`min-h-48 w-full rounded-xl border border-blue-brand/30 px-5 py-3.5 text-sm text-gray-700 focus:border-blue-brand focus:outline-none focus:ring-1 focus:ring-blue-brand ${errors[item.name] ? "border-red-500" : ""}`}
                      rows={4}
                    />
                    {errors[item.name] && (
                      <p className="text-red-500 text-sm">
                        {errors[item.name]}
                      </p>
                    )}
                  </div>
                ))}
              {contact.form
                .filter((item) => item.type === "submit")
                .map((item, i) => (
                  <div className="inline-block" key={i}>
                    <button
                      type={getButtonType(item.type)}
                      name={item.name}
                      id={item.name}
                      className="relative box-border inline-flex h-12 items-center justify-center rounded-full bg-blue-brand px-6 py-3 pl-[1.625rem] pr-[3.7rem] text-base font-medium leading-none tracking-[0.04rem] text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:brightness-[1.08] focus:translate-y-[-2px] focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-transparent focus:brightness-[1.08] active:brightness-[1] max-xs:pr-[3.45rem] max-xs:text-[14px] md:h-[3.25rem] xl:text-[1.125rem]"
                    >
                      {item.text}
                      <Icon
                        id="arrow-long-right"
                        className="absolute right-0 m-[0.438rem] h-[2.5rem] w-[2.5rem] rounded-full bg-white bg-opacity-35 fill-white p-[0.6rem] max-xs:m-[.4rem] max-xs:h-[2.35rem] max-xs:w-[2.35rem]"
                      />
                    </button>
                  </div>
                ))}
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
