import { useState } from "react";
import { Link } from "./Link";
import Icon from "./Icon/Icon";
import { Button } from "./Form/Button";
import { SubmitBtn } from "./Form/SubmitBtn";
import { useForm } from "@rvf/remix";
import { Input } from "./Form/Input";

type RvfFormApiProps = {
  form: ReturnType<typeof useForm>;
};
export default function SignInForm({ form }: RvfFormApiProps) {
  // State to manage password visibility
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
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
    <>
      <div className="flex flex-col gap-6">
        {/* {Email Address} */}
        <div className="relative">
          <Input
            name="email"
            label="Email Address"
            type="email"
            placeholder="Email Address"
          />
        </div>
        {/* {Password} */}
        <div className="relative">
          <Input
            name="password"
            label="Password"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Enter password"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-900 dark:text-white/80"
            aria-label={isPasswordVisible ? "Hide password" : "Show password"}
          >
            {isPasswordVisible ? (
              <Icon id="eye-show" className="h-6 w-6 fill-current"></Icon>
            ) : (
              <Icon id="eye-hide" className="h-6 w-6 fill-current"></Icon>
            )}
          </button>
        </div>
        {/* {Remember Me} */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            className="size-4 appearance-none rounded border border-gray-300 text-blue-brand checked:appearance-auto checked:bg-blue-brand focus:ring-blue-brand"
          />
          <label htmlFor="remember" className="text-sm">
            Remember Me
          </label>
        </div>
        {/* {Submit} */}
        <SubmitBtn isSubmitting={form.formState.isSubmitting}>Log In</SubmitBtn>
        {/* {Forgot Password?} */}
        <div>
          <Link
            to={"#"}
            className="font-bold text-gray-900 hover:underline dark:text-white"
          >
            Forgot Password?
          </Link>
        </div>
        {/* {OR} */}
        <div className="relative flex w-full items-center justify-center">
          <hr className="my-4 h-px w-64 border-0 bg-gray-100 dark:bg-gray-700"></hr>
          <span className="absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-gray-900 dark:bg-gray-900 dark:text-white">
            OR
          </span>
        </div>

        {/* Add Gmail login button */}
        <Button type="button" onClick={handleGmailLogin} variant={"secondary"}>
          <img
            src="/img/icon-google.png"
            className="mr-2 h-5 w-5 max-xs:h-3.5 max-xs:w-3.5"
          ></img>{" "}
          Continue with Google
        </Button>
      </div>
      {/* {Sign Up} */}
      <div className="mt-8 text-center">
        <p className="text-base">
          Don't have an account?{" "}
          <Link to={"/signup"} className="text-blue-brand hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
}
