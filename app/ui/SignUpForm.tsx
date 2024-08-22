import { useState } from "react";
import { Form } from "@remix-run/react";
import { Link } from "./Link";
import Icon from "./Icon/Icon";
import { Button } from "./Form/Button";

export default function SignUpCard() {
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
    <Form action="#" method="post">
      <div className="flex flex-col gap-6">
        {/* {Name} */}
        <div className="relative">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full rounded-xl border border-blue-brand/30 bg-blue-brand/5 px-5 py-3.5 text-sm text-gray-700 focus:border-blue-brand focus:outline-none focus:ring-1 focus:ring-blue-brand"
            placeholder="Name"
          />
        </div>
        {/* {Email Address} */}
        <div className="relative">
          <label htmlFor="email" className="sr-only">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded-xl border border-blue-brand/30 bg-blue-brand/5 px-5 py-3.5 text-sm text-gray-700 focus:border-blue-brand focus:outline-none focus:ring-1 focus:ring-blue-brand"
            placeholder="Email Address"
          />
        </div>
        {/* {Mobile Number} */}
        <div className="relative">
          <label htmlFor="phone" className="sr-only">
            Mobile Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full rounded-xl border border-blue-brand/30 bg-blue-brand/5 px-5 py-3.5 text-sm text-gray-700 focus:border-blue-brand focus:outline-none focus:ring-1 focus:ring-blue-brand"
            placeholder="Mobile Number"
          />
        </div>
        {/* {Country} */}
        <div className="relative">
          <label htmlFor="country" className="sr-only">
            Country
          </label>
          <select
            id="country"
            name="country"
            className="w-full rounded-xl border border-blue-brand/30 bg-blue-brand/5 px-5 py-3.5 text-sm text-gray-700 focus:border-blue-brand focus:outline-none focus:ring-1 focus:ring-blue-brand"
          >
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="gb">United Kingdom</option>
            <option value="au">Australia</option>
          </select>
        </div>
        {/* {Password} */}
        <div className="relative">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type={"password" && isPasswordVisible ? "text" : "password"}
            id="password"
            name="password"
            className="w-full rounded-xl border border-blue-brand/30 bg-blue-brand/5 px-5 py-3.5 text-sm text-gray-700 focus:border-blue-brand focus:outline-none focus:ring-1 focus:ring-blue-brand"
            placeholder="Password"
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
        {/* {Submit} */}
        <Button type="submit" name="submit" id="submit">
          Sign Up Now
        </Button>
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
      {/* {Sign In} */}
      <div className="mt-8 text-center">
        <p className="text-base">
          Already have an account?{" "}
          <Link to={"/signin"} className="text-blue-brand hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </Form>
  );
}
