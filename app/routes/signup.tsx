import { json, type MetaFunction } from "@remix-run/node";
import AuthCard from "~/ui/AuthCard";
import SignUpForm from "~/ui/SignUpForm";

import { LoaderFunctionArgs } from "@remix-run/node";
import api from "~/http/api";
import { useLoaderData } from "@remix-run/react";

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
  return (
    <>
      <AuthCard data={data} children={<SignUpForm />} />
    </>
  );
}
