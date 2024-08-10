import { json, type MetaFunction } from "@remix-run/node";
import PageHeader from "../ui/PageHeader";
import FaqCard from "~/ui/FaqCard";

import { LoaderFunctionArgs } from "@remix-run/node";
import api from "~/http/api";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({}: LoaderFunctionArgs) => {
  const baseURL = process.env.VITE_BASE_URL;
  const data = await api.get(baseURL + "/faqpage");
  return json(data.data);
};

export const meta: MetaFunction = () => {
  return [
    { title: "FAQ - HaSMaR" },
    {
      name: "description",
      content: "Questions On Your Mind?",
    },
    {
      name: "keywords",
      content:
        "Relationship Adviser, Relationship Adviser, Dealing with Conflict",
    },
  ];
};

export default function Couples() {
  const [{ pageheader, faq }] = useLoaderData<typeof loader>();
  return (
    <>
      <PageHeader pageheader={pageheader} />
      <FaqCard faq={faq} />
    </>
  );
}
