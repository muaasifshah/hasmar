import React, { useState } from "react";
import { Form } from "@remix-run/react";
import Icon from "./Icon/Icon";

// Define the types as provided
interface QuizQuestion {
  text: string;
  options: string[];
}

interface QuizExperienceOption {
  title: string;
  image: string;
}

interface QuizEmailFormInput {
  type: string;
  name: string;
  text: string;
}

interface QuizEmailEmailSection {
  title: string;
  description: string;
  form: QuizEmailFormInput[];
}

interface QuizSection {
  quiz_introduction: {
    title: string;
    description: string;
    button_text: string;
    image: string;
  };
  quiz_questions: {
    title: string;
    questions: QuizQuestion[];
    button_prev: string;
    button_next: string;
  };
  quiz_experience: {
    title: string;
    subtitle: string;
    options: QuizExperienceOption[];
  };
  quiz_email: {
    title: string;
    subtitle: string;
    email_section: QuizEmailEmailSection;
  };
  quiz_complete: {
    title: string;
    description: string;
  };
}

interface QuizCardProps {
  sections: QuizSection[];
}

export default function QuizCard({ sections }: QuizCardProps) {
  const [currentSection, setCurrentSection] = useState(0); // 0: Introduction, 1: Questions, 2: Experience, 3: Email, 4: Complete
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [selectedExperienceOption, setSelectedExperienceOption] = useState<
    string | null
  >(null);
  const [email, setEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [responseType, setResponseType] = useState<"success" | "error" | null>(
    null,
  );

  const questionsPerPage = 5;
  const totalQuestions = sections[0].quiz_questions.questions.length;

  const handleNextButtonClick = () => {
    if (currentSection === 1) {
      const nextQuestionIndex = currentQuestionIndex + questionsPerPage;
      if (nextQuestionIndex >= totalQuestions) {
        setCurrentSection(2); // Move to Experience section
      } else {
        setCurrentQuestionIndex(nextQuestionIndex);
      }
    } else if (currentSection === 2 && selectedExperienceOption) {
      setCurrentSection(3); // Move to Email section
    }
  };

  const handlePrevButtonClick = () => {
    if (currentSection === 1) {
      const prevQuestionIndex = currentQuestionIndex - questionsPerPage;
      /*if (prevQuestionIndex < 0) {
        setCurrentQuestionIndex(0);
      } else {
        setCurrentQuestionIndex(prevQuestionIndex);
      }*/
      setCurrentQuestionIndex(Math.max(0, prevQuestionIndex));
    }
  };

  const handleOptionClick = (option: string) => {
    setSelectedExperienceOption(option);
    setCurrentSection(3); // Move to Email section immediately
  };

  const handleQuestionAnswer = (questionIndex: number, answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate an API request
    try {
      // Replace this with the actual API endpoint when the server is ready
      await new Promise(
        (resolve, reject) =>
          setTimeout(() => {
            // Simulate a successful response
            const isSuccess = Math.random() > 0.5; // Randomly succeed or fail
            if (isSuccess) {
              resolve("Data submitted successfully!");
            } else {
              reject("Failed to submit data.");
            }
          }, 1000), // Simulate network latency
      );

      setResponseType("success");
      setResponseMessage("Data submitted successfully!");
      // Reset or navigate to the final section if needed
      setCurrentSection(4); // Move to Complete section
    } catch (error) {
      setResponseType("error");
      setResponseMessage("Failed to submit data.");
    }
  };

  const renderQuestions = () => {
    const questions = sections[0].quiz_questions.questions.slice(
      currentQuestionIndex,
      currentQuestionIndex + questionsPerPage,
    );
    return (
      <>
        <ul className="list-none space-y-6 p-0">
          {questions.map((question, qIndex) => (
            <li
              key={qIndex}
              className="flex items-center justify-between gap-3 rounded-2xl bg-white px-7 py-4 shadow dark:bg-gray-800 max-md:flex-wrap md:rounded-full"
            >
              <h5 className="flex-auto text-lg font-bold md:text-xl">
                {question.text}
              </h5>
              <div className="flex flex-none flex-nowrap gap-3">
                {question.options.map((option, oIndex) => (
                  <label
                    key={oIndex}
                    htmlFor={`question-${currentQuestionIndex + qIndex}-${oIndex}`}
                    className="relative inline-block cursor-pointer rounded-full border border-blue-brand bg-white px-4 py-1 text-center leading-snug transition-all duration-300 last:bg-blue-brand/10 has-[:checked]:border-blue-brand has-[:checked]:bg-blue-brand has-[:checked]:text-white dark:bg-gray-900 dark:has-[:checked]:bg-blue-brand md:px-5 md:py-1.5"
                  >
                    <input
                      type="radio"
                      id={`question-${currentQuestionIndex + qIndex}-${oIndex}`}
                      name={`question-${currentQuestionIndex + qIndex}`}
                      value={option}
                      checked={
                        selectedAnswers[currentQuestionIndex + qIndex] ===
                        option
                      }
                      onChange={() =>
                        handleQuestionAnswer(
                          currentQuestionIndex + qIndex,
                          option,
                        )
                      }
                      className="sr-only"
                      aria-label={`Option ${option} for question ${question.text}`}
                    />
                    <span className="text-sm font-semibold uppercase leading-tight md:text-base">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center space-x-4">
          {currentQuestionIndex > 0 && (
            <button
              type="button"
              onClick={handlePrevButtonClick}
              aria-label="Previous"
              className="relative box-border inline-flex h-12 items-center justify-center rounded-full bg-gray-900 px-6 py-3 pl-[3.7rem] pr-[1.625rem] text-base font-medium leading-none tracking-[0.04rem] text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:brightness-[1.08] focus:translate-y-[-2px] focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-transparent focus:brightness-[1.08] active:brightness-[1] dark:bg-gray-700 max-xs:pl-[3.45rem] max-xs:text-[14px] md:h-[3.25rem] xl:text-[1.125rem]"
            >
              <Icon
                id="arrow-long-right"
                className="absolute left-0 m-[0.438rem] h-[2.5rem] w-[2.5rem] rotate-180 rounded-full bg-white bg-opacity-35 fill-white p-[0.6rem] max-xs:m-[.4rem] max-xs:h-[2.35rem] max-xs:w-[2.35rem]"
              />
              {currentQuestionIndex + questionsPerPage >= totalQuestions
                ? sections[0].quiz_questions.button_prev
                : "Next"}
            </button>
          )}
          <button
            type="button"
            onClick={handleNextButtonClick}
            aria-label="Next"
            className="relative box-border inline-flex h-12 items-center justify-center rounded-full bg-blue-brand px-6 py-3 pl-[1.625rem] pr-[3.7rem] text-base font-medium leading-none tracking-[0.04rem] text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:brightness-[1.08] focus:translate-y-[-2px] focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-transparent focus:brightness-[1.08] active:brightness-[1] max-xs:pr-[3.45rem] max-xs:text-[14px] md:h-[3.25rem] xl:text-[1.125rem]"
          >
            {currentQuestionIndex + questionsPerPage >= totalQuestions
              ? sections[0].quiz_questions.button_next
              : "Next"}
            <Icon
              id="arrow-long-right"
              className="absolute right-0 m-[0.438rem] h-[2.5rem] w-[2.5rem] rounded-full bg-white bg-opacity-35 fill-white p-[0.6rem] max-xs:m-[.4rem] max-xs:h-[2.35rem] max-xs:w-[2.35rem]"
            />
          </button>
        </div>
      </>
    );
  };

  return (
    <section
      className={`relative z-0 overflow-hidden ${currentSection !== 0 ? "bg-blue-brand/10" : ""} text-gray-900 dark:bg-gray-900 dark:text-white`}
    >
      <div className="container mx-auto space-y-14 px-4 py-14 lg:space-y-24 lg:px-12 lg:py-24">
        {currentSection === 0 && (
          <div
            className="relative z-0 rounded-2xl bg-blue-brand/10 p-7 dark:bg-gray-800 md:p-14 lg:min-h-[37rem] lg:pr-[45%]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="mb-5 text-2xl font-bold md:text-3xl">
              {sections[0].quiz_introduction.title}
            </h2>
            <p className="mb-16 leading-loose">
              {sections[0].quiz_introduction.description}
            </p>
            <button
              type="button"
              onClick={() => setCurrentSection(1)}
              aria-label={sections[0].quiz_introduction.button_text}
              className="relative box-border inline-flex h-12 items-center justify-center rounded-full bg-blue-brand px-6 py-3 pl-[1.625rem] pr-[3.7rem] text-base font-medium leading-none tracking-[0.04rem] text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:brightness-[1.08] focus:translate-y-[-2px] focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-transparent focus:brightness-[1.08] active:brightness-[1] max-xs:pr-[3.45rem] max-xs:text-[14px] md:h-[3.25rem] xl:text-[1.125rem]"
            >
              {sections[0].quiz_introduction.button_text}
              <Icon
                id="arrow-long-right"
                className="absolute right-0 m-[0.438rem] h-[2.5rem] w-[2.5rem] rounded-full bg-white bg-opacity-35 fill-white p-[0.6rem] max-xs:m-[.4rem] max-xs:h-[2.35rem] max-xs:w-[2.35rem]"
              />
            </button>
            <img
              src={sections[0].quiz_introduction.image}
              alt="Introduction"
              className="absolute bottom-0 right-0 -z-10 h-full w-full bg-right-bottom bg-no-repeat object-contain object-right-top max-lg:hidden"
              aria-label={sections[0].quiz_introduction.title}
            />
          </div>
        )}

        {currentSection === 1 && (
          <div>
            <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">
              {sections[0].quiz_questions.title}
            </h2>
            {renderQuestions()}
          </div>
        )}

        {currentSection === 2 && (
          <div className="mb-6">
            <h2 className="mb-2 text-center text-2xl font-bold md:text-3xl">
              {sections[0].quiz_experience.title}
            </h2>
            <p className="mb-10 text-center text-xl">
              {sections[0].quiz_experience.subtitle}
            </p>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {sections[0].quiz_experience.options.map((option, oIndex) => (
                <div
                  key={oIndex}
                  className="flex cursor-pointer items-center justify-around gap-5 rounded-2xl bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-gray-800 max-lg:flex-wrap max-lg:text-center md:px-10 md:py-9"
                  onClick={() => handleOptionClick(option.title)}
                  aria-label={`Select experience option: ${option.title}`}
                >
                  <p className="text-xl font-semibold leading-relaxed md:text-2xl">
                    {option.title}
                  </p>
                  <img
                    src={option.image}
                    alt={option.title}
                    className="mb-2 h-[140px] w-[140px] rounded-full object-cover"
                    aria-label={`Experience image for ${option.title}`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {currentSection === 3 && (
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-2 text-center text-2xl font-bold md:text-3xl">
              {sections[0].quiz_email.title}
            </h2>
            <p className="mb-10 text-center text-xl">
              {sections[0].quiz_email.subtitle}
            </p>
            <div className="rounded-2xl bg-white p-7 dark:bg-gray-800 md:p-12">
              <h4 className="mb-2 text-[1.375rem] font-semibold">
                {sections[0].quiz_email.email_section.title}
              </h4>
              <p className="mb-5">
                {sections[0].quiz_email.email_section.description}
              </p>
              <Form onSubmit={handleSubmit} className="space-y-6">
                {sections[0].quiz_email.email_section.form.map(
                  (input, iIndex) => (
                    <div
                      key={iIndex}
                      className={`${input.type === "submit" ? "text-center" : ""}`}
                    >
                      {input.type === "email" && (
                        <input
                          type="email"
                          name={input.name}
                          placeholder={input.text}
                          value={email}
                          onChange={handleEmailChange}
                          className={`w-full rounded-xl border border-blue-brand/30 bg-blue-brand/10 px-5 py-3 text-lg leading-snug text-gray-700 focus:border-blue-brand focus:outline-none focus:ring-1 focus:ring-blue-brand`}
                          required
                          aria-label={`Email input for ${input.name}`}
                        />
                      )}
                      {input.type === "submit" && (
                        <button
                          type="submit"
                          className="relative box-border inline-flex h-12 items-center justify-center rounded-full bg-blue-brand px-6 py-3 pl-[1.625rem] pr-[3.7rem] text-base font-medium leading-none tracking-[0.04rem] text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:brightness-[1.08] focus:translate-y-[-2px] focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-transparent focus:brightness-[1.08] active:brightness-[1] max-xs:pr-[3.45rem] max-xs:text-[14px] md:h-[3.25rem] xl:text-[1.125rem]"
                          aria-label={input.text}
                        >
                          {input.text}
                          <Icon
                            id="arrow-long-right"
                            className="absolute right-0 m-[0.438rem] h-[2.5rem] w-[2.5rem] rounded-full bg-white bg-opacity-35 fill-white p-[0.6rem] max-xs:m-[.4rem] max-xs:h-[2.35rem] max-xs:w-[2.35rem]"
                          />
                        </button>
                      )}
                    </div>
                  ),
                )}
              </Form>
              {responseMessage && (
                <div
                  className={`mx-auto mt-4 max-w-max px-4 py-3 text-center font-semibold tracking-wider ${
                    responseType === "success"
                      ? "bg-[#c3f1c3] text-[#0fbb0f]"
                      : "bg-[#f5d5d3] text-[#e43629]"
                  }`}
                  aria-live="polite"
                >
                  {responseMessage}
                </div>
              )}
            </div>
          </div>
        )}

        {currentSection === 4 && (
          <div className="mx-auto max-w-2xl rounded-2xl border-2 border-gray-900 bg-white px-4 py-14 text-center dark:border-white/20 dark:bg-gray-800">
            <svg
              className="animate-thankyou-fillOnly animate-thankyou-scaleOnly mb-6 inline-block h-20 w-20 rounded-full stroke-current text-white shadow-inner"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                cx="26"
                cy="26"
                r="25"
                fill="none"
                className="animate-thankyou-stroke"
                style={{
                  strokeDasharray: 166,
                  strokeDashoffset: 166,
                  strokeWidth: 2,
                  strokeMiterlimit: 10,
                  stroke: "#0fbb0f",
                }}
              />
              <path
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
                fill="none"
                className="animate-thankyou-stroke"
                style={{
                  strokeDasharray: 48,
                  strokeDashoffset: 48,
                  strokeWidth: 2,
                  strokeMiterlimit: 10,
                  stroke: "#0fbb0f",
                }}
              />
            </svg>
            <h2 className="mb-4 text-2xl font-bold text-[#0fbb0f] md:text-3xl">
              {sections[0].quiz_complete.title}
            </h2>
            <p className="text-xl">{sections[0].quiz_complete.description}</p>
          </div>
        )}
      </div>
    </section>
  );
}
