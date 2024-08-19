import { json, type MetaFunction } from "@remix-run/node";
import PageHeader from "~/ui/PageHeader";
import ProductSingleCard from "~/ui/ProductSingleCard";

import { LoaderFunctionArgs } from "@remix-run/node";
import api from "~/http/api";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({}: LoaderFunctionArgs) => {
  const baseURL = process.env.VITE_BASE_URL;
  const data = await api.get(baseURL + "/product");
  return json(data.data);
};

export const meta: MetaFunction = () => {
  return [
    { title: "Product Single - HaSMaR" },
    {
      name: "description",
      content: "We understand that your privacy is important.",
    },
    {
      name: "keywords",
      content:
        "Relationship Adviser, Relationship Adviser, Dealing with Conflict",
    },
  ];
};

export default function Couples() {
  const { pageheader, products } = useLoaderData<typeof loader>();
  return (
    <>
      <PageHeader pageheader={pageheader} />
      <ProductSingleCard products={products} />
    </>
  );
}
