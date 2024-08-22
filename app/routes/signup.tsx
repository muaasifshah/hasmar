import { ActionFunctionArgs, json, type MetaFunction } from "@remix-run/node";
import AuthCard from "~/ui/AuthCard";
import SignUpForm from "~/ui/SignUpForm";

import { LoaderFunctionArgs } from "@remix-run/node";
import api from "~/http/api";
import { useActionData, useLoaderData, useNavigate } from "@remix-run/react";

import { z } from "zod";
import { withZod } from "@rvf/zod";
import { validationError, ValidatedForm } from "@rvf/remix";
import { useEffect } from "react";

export const validator = withZod(
  z.object({
    name: z.string().min(3, "Name is required"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid emaill address"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(6, "Password must be at least 6 characters long"),
    phone: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number must be no more than 15 digits")
      .regex(/^\d+$/, "Phone number must contain only digits"),
    country: z.string().min(1, "Country is required"),
  }),
);

export const action = async ({ request }: ActionFunctionArgs) => {
  const result = await validator.validate(await request.formData());

  if (result.error) {
    return validationError(result.error);
  }
  return json(result.data);
};

export const loader = async ({}: LoaderFunctionArgs) => {
  const baseURL = process.env.VITE_BASE_URL;
  const data = await api.get(baseURL + "/signup");
  return json(data.data);
};

export const meta: MetaFunction = () => {
  return [
    { title: "Sign In - HaSMaR" },
    {
      name: "description",
      content: "We assume you accept these terms and conditions.",
    },
    {
      name: "keywords",
      content:
        "Relationship Adviser, Relationship Adviser, Dealing with Conflict",
    },
  ];
};

export default function Couples() {
  const data = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const navigate = useNavigate();

  return (
    <>
      <ValidatedForm validator={validator} method="post">
        {(form) => {
          // Use the form instance to manage submission state and handle success
          const { formState, resetForm } = form;

          useEffect(() => {
            if (formState.submitStatus === "success") {
              resetForm();
              navigate("/quiz");
            }
          }, [formState.submitStatus, resetForm]);

          return <AuthCard data={data} children={<SignUpForm form={form} />} />;
        }}
      </ValidatedForm>
    </>
  );
}
