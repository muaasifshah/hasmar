import { json, type MetaFunction } from "@remix-run/node";
import PageHeader from "../ui/PageHeader";
import TypographyCard from "~/ui/TypographyCard";

import { LoaderFunctionArgs } from "@remix-run/node";
import api from "~/http/api";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({}: LoaderFunctionArgs) => {
  const baseURL = process.env.VITE_BASE_URL;
  const data = await api.get(baseURL + "/termsconditionspage");
  return json(data.data);
};

export const meta: MetaFunction = () => {
  return [
    { title: "Terms and Conditions - HaSMaR" },
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
  const [{ pageheader, content }] = useLoaderData<typeof loader>();
  return (
    <>
      <PageHeader pageheader={pageheader} />
      <TypographyCard content={content} />
    </>
  );
}
