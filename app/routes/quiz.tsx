import { json, type MetaFunction } from "@remix-run/node";
import QuizCard from "~/ui/QuizCard";
import PageHeader from "~/ui/PageHeader";

import { LoaderFunctionArgs } from "@remix-run/node";
import api from "~/http/api";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({}: LoaderFunctionArgs) => {
  const baseURL = process.env.VITE_BASE_URL;
  const data = await api.get(baseURL + "/quiz");
  return json(data.data);
};

export const meta: MetaFunction = () => {
  return [
    { title: "Free HaSMaR Relationship Quiz - HaSMaR" },
    {
      name: "description",
      content: "Your relationship dynamics with our complimentary",
    },
    {
      name: "keywords",
      content:
        "Relationship Adviser, Relationship Adviser, Dealing with Conflict",
    },
  ];
};

export default function Couples() {
  const { pageheader, sections } = useLoaderData<typeof loader>();
  return (
    <>
      <PageHeader pageheader={pageheader} />
      <QuizCard sections={sections} />
    </>
  );
}
