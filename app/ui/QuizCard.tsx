import React, { useState } from "react";

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
        <ul className="mb-4 list-inside list-disc">
          {questions.map((question, qIndex) => (
            <li key={qIndex} className="mb-4">
              <p className="mb-2 font-semibold">{question.text}</p>
              <ul className="list-inside pl-4">
                {question.options.map((option, oIndex) => (
                  <li key={oIndex} className="text-gray-700">
                    <label>
                      <input
                        type="radio"
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
                        className="mr-2"
                        aria-label={`Option ${option} for question ${question.text}`}
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="flex space-x-4">
          {currentQuestionIndex > 0 && (
            <button
              className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
              onClick={handlePrevButtonClick}
              aria-label="Previous"
            >
              {sections[0].quiz_questions.button_prev}
            </button>
          )}
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={handleNextButtonClick}
            aria-label="Next"
          >
            {currentQuestionIndex + questionsPerPage >= totalQuestions
              ? sections[0].quiz_questions.button_next
              : "Next"}
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-lg">
      {currentSection === 0 && (
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-bold">
            {sections[0].quiz_introduction.title}
          </h2>
          <p className="mb-4 text-gray-700">
            {sections[0].quiz_introduction.description}
          </p>
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={() => setCurrentSection(1)}
            aria-label={sections[0].quiz_introduction.button_text}
          >
            {sections[0].quiz_introduction.button_text}
          </button>
          <img
            src={sections[0].quiz_introduction.image}
            alt="Introduction"
            className="mt-4 h-auto w-full rounded"
            aria-label={sections[0].quiz_introduction.title}
          />
        </div>
      )}

      {currentSection === 1 && (
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-bold">
            {sections[0].quiz_questions.title}
          </h2>
          {renderQuestions()}
        </div>
      )}

      {currentSection === 2 && (
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-bold">
            {sections[0].quiz_experience.title}
          </h2>
          <h3 className="mb-2 text-xl font-semibold">
            {sections[0].quiz_experience.subtitle}
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {sections[0].quiz_experience.options.map((option, oIndex) => (
              <div
                key={oIndex}
                className="cursor-pointer rounded bg-gray-100 p-4 shadow"
                onClick={() => handleOptionClick(option.title)}
                aria-label={`Select experience option: ${option.title}`}
              >
                <img
                  src={option.image}
                  alt={option.title}
                  className="mb-2 h-32 w-full rounded object-cover"
                  aria-label={`Experience image for ${option.title}`}
                />
                <p className="text-lg font-semibold">{option.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {currentSection === 3 && (
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-bold">
            {sections[0].quiz_email.title}
          </h2>
          <h3 className="mb-2 text-xl font-semibold">
            {sections[0].quiz_email.subtitle}
          </h3>
          <div className="rounded bg-gray-100 p-4">
            <h4 className="mb-2 text-lg font-semibold">
              {sections[0].quiz_email.email_section.title}
            </h4>
            <p className="mb-4 text-gray-700">
              {sections[0].quiz_email.email_section.description}
            </p>
            <form onSubmit={handleSubmit}>
              {sections[0].quiz_email.email_section.form.map(
                (input, iIndex) => (
                  <div key={iIndex} className="mb-4">
                    {input.type === "email" && (
                      <input
                        type="email"
                        name={input.name}
                        placeholder={input.text}
                        value={email}
                        onChange={handleEmailChange}
                        className="w-full rounded border border-gray-300 px-3 py-2"
                        required
                        aria-label={`Email input for ${input.name}`}
                      />
                    )}
                    {input.type === "submit" && (
                      <button
                        type="submit"
                        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                        aria-label={input.text}
                      >
                        {input.text}
                      </button>
                    )}
                  </div>
                ),
              )}
            </form>
            {responseMessage && (
              <div
                className={`mt-4 p-4 ${
                  responseType === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
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
        <div>
          <h2 className="mb-2 text-2xl font-bold">
            {sections[0].quiz_complete.title}
          </h2>
          <p className="text-gray-700">
            {sections[0].quiz_complete.description}
          </p>
        </div>
      )}
    </div>
  );
}
