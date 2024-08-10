import { useState } from "react";
import { Link } from "./Link";

// Define the type for each form field
interface FormField {
  type:
    | "text"
    | "email"
    | "password"
    | "checkbox"
    | "tel"
    | "select"
    | "submit";
  name: string;
  text: string;
  options?: Array<{ value: string; text: string }>; // Only for select type
}

// Define the type for the SignCard props
interface SignProps {
  sign: {
    title: string;
    subtitle: string;
    image: string;
    form: FormField[];
    forgot?: { text: string; link: string }; // Optional forgot password link
    helptext: { text: string; linktext: string; link: string };
  };
}

export default function SignCard({ sign }: SignProps) {
  // State to manage password visibility
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Utility function to get a valid button type
  const getButtonType = (type: FormField["type"]): "submit" | undefined => {
    if (type === "submit") {
      return type;
    }
    return undefined;
  };

  // Function to handle Gmail login
  const handleGmailLogin = async () => {
    try {
      // Implement Gmail login integration here
      // For example, using Firebase:
      // await signInWithGoogle();
      alert("Gmail login functionality is not implemented yet.");
    } catch (error) {
      console.error("Gmail login failed", error);
    }
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="relative bg-blue-brand/10">
      <div className="container mx-auto px-4 py-14 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 overflow-hidden rounded-xl border-2 border-gray-900 bg-white text-gray-900 dark:border-white/20 dark:bg-gray-900 dark:text-white lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-8 text-center sm:px-20 sm:py-24">
            <div className="mb-10">
              <h2 className="text-4xl font-bold">{sign.title}</h2>
              <p className="mt-2 opacity-90">{sign.subtitle}</p>
            </div>
            <form action="#" method="post">
              <div className="flex flex-col gap-6">
                {sign.form
                  .filter(
                    (item) =>
                      item.type !== "checkbox" &&
                      item.type !== "select" &&
                      item.type !== "submit",
                  )
                  .map((field) => (
                    <div key={field.name} className="relative">
                      <label htmlFor={field.name} className="sr-only">
                        {field.text}
                      </label>
                      <input
                        type={
                          field.type === "password" && isPasswordVisible
                            ? "text"
                            : field.type
                        }
                        id={field.name}
                        name={field.name}
                        className="w-full rounded-xl border border-blue-brand/30 bg-blue-brand/5 px-5 py-3.5 text-sm text-gray-700 focus:border-blue-brand focus:outline-none focus:ring-1 focus:ring-blue-brand"
                        placeholder={field.text}
                      />
                      {field.type === "password" && (
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute right-4 top-1/2 -translate-y-1/2"
                          aria-label={
                            isPasswordVisible
                              ? "Hide password"
                              : "Show password"
                          }
                        >
                          {isPasswordVisible ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-gray-500"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M1 12s3-7 11-7 11 7 11 7-3 7-11 7S1 12 1 12z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-gray-500"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M1 12s3-7 11-7 11 7 11 7-3 7-11 7S1 12 1 12z" />
                              <path d="M12 12a3 3 0 0 0 0 6" />
                            </svg>
                          )}
                        </button>
                      )}
                    </div>
                  ))}

                {sign.form
                  .filter((item) => item.type === "select")
                  .map((field) => (
                    <div key={field.name}>
                      <label htmlFor={field.name} className="sr-only">
                        {field.text}
                      </label>
                      <select
                        id={field.name}
                        name={field.name}
                        className="w-full rounded-xl border border-blue-brand/30 bg-blue-brand/5 px-5 py-3.5 text-sm text-gray-700 focus:border-blue-brand focus:outline-none focus:ring-1 focus:ring-blue-brand"
                      >
                        {field.options?.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.text}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}

                {sign.form
                  .filter((item) => item.type === "checkbox")
                  .map((field) => (
                    <div key={field.name} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={field.name}
                        name={field.name}
                        className="size-4 appearance-none rounded border border-gray-300 text-blue-brand checked:appearance-auto checked:bg-blue-brand focus:ring-blue-brand"
                      />
                      <label htmlFor={field.name} className="text-sm">
                        {field.text}
                      </label>
                    </div>
                  ))}

                {sign.form
                  .filter((item) => item.type === "submit")
                  .map((field) => {
                    const buttonType = getButtonType(field.type);
                    return (
                      buttonType && (
                        <button
                          key={field.name}
                          type={buttonType}
                          name={field.name}
                          id={field.name}
                          className="relative box-border inline-flex h-12 items-center justify-center rounded-full bg-blue-brand px-6 py-3 text-base font-medium leading-none tracking-[0.04rem] text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:brightness-[1.08] focus:translate-y-[-2px] focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-transparent focus:brightness-[1.08] active:brightness-[1] max-xs:text-[14px] md:h-[3.25rem] xl:text-[1.125rem]"
                        >
                          {field.text}
                        </button>
                      )
                    );
                  })}

                {sign.forgot && (
                  <div>
                    <Link
                      to={sign.forgot.link}
                      className="font-bold text-gray-900 hover:underline dark:text-white"
                    >
                      {sign.forgot.text}
                    </Link>
                  </div>
                )}

                <div className="relative flex w-full items-center justify-center">
                  <hr className="my-4 h-px w-64 border-0 bg-gray-100 dark:bg-gray-700"></hr>
                  <span className="absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-gray-900 dark:bg-gray-900 dark:text-white">
                    OR
                  </span>
                </div>

                {/* Add Gmail login button */}
                <button
                  type="button"
                  onClick={handleGmailLogin}
                  className="relative box-border inline-flex h-12 items-center justify-center rounded-full bg-black px-6 py-3 text-base font-medium leading-none tracking-[0.04rem] text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:brightness-[1.08] focus:translate-y-[-2px] focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:brightness-[1.08] active:brightness-[1] dark:bg-white dark:text-black max-xs:text-[14px] md:h-[3.25rem] xl:text-[1.125rem]"
                >
                  Continue with Google
                </button>
              </div>
              <div className="mt-8 text-center">
                <p className="text-base">
                  {sign.helptext.text}{" "}
                  <Link
                    to={sign.helptext.link}
                    className="text-blue-brand hover:underline"
                  >
                    {sign.helptext.linktext}
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center bg-blue-brand px-6 py-8 text-center sm:px-20 sm:py-24">
            <div className="flex-1 rounded-2xl bg-white/20">
              <img
                src={sign.image}
                alt="Sign up illustration"
                width={450}
                height={560}
                className="m-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
