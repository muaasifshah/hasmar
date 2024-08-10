import { json, type MetaFunction } from "@remix-run/node";
import PageHeader from "../ui/PageHeader";
import ContactCard from "~/ui/ContactCard";
import SponsorCard from "~/ui/SponsorCard";

import { LoaderFunctionArgs } from "@remix-run/node";
import api from "~/http/api";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({}: LoaderFunctionArgs) => {
  const baseURL = process.env.VITE_BASE_URL;
  const data = await api.get(baseURL + "/contactpage");
  return json(data.data);
};

export const meta: MetaFunction = () => {
  return [
    { title: "Contact Us - HaSMaR" },
    {
      name: "description",
      content: "Connect with HaSMaR Institute",
    },
    {
      name: "keywords",
      content:
        "Relationship Adviser, Relationship Adviser, Dealing with Conflict",
    },
  ];
};

export default function Couples() {
  const [{ pageheader, contact, sponsor }] = useLoaderData<typeof loader>();
  return (
    <>
      <PageHeader pageheader={pageheader} />
      <ContactCard contact={contact} />
      <SponsorCard sponsor={sponsor} />
    </>
  );
}
