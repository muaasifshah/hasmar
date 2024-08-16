import { json, type MetaFunction } from "@remix-run/node";
import PageHeader from "~/ui/PageHeader";
import VideobannerCard from "~/ui/VideobannerCard";
import PerksCard from "~/ui/PerksCard";
import AboutCard from "~/ui/AboutCard";
import EasystepCard from "~/ui/EasystepCard";

import { LoaderFunctionArgs } from "@remix-run/node";
import api from "~/http/api";
import { useLoaderData, useLocation } from "@remix-run/react";

export const loader = async ({}: LoaderFunctionArgs) => {
  const baseURL = process.env.VITE_BASE_URL;
  const data = await api.get(baseURL + "/facilitatorspage");
  return json(data.data);
};

export const meta: MetaFunction = () => {
  return [
    { title: "Facilitators - HaSMaR" },
    {
      name: "description",
      content: "Our team of dedicated facilitators is committed to guiding",
    },
    {
      name: "keywords",
      content:
        "Relationship Adviser, Relationship Adviser, Dealing with Conflict",
    },
  ];
};

export default function Facilitators() {
  const { pathname } = useLocation();

  const { pageheader, videobanner, perks, about, easystep } =
    useLoaderData<typeof loader>();
  return (
    <>
      <PageHeader pageheader={pageheader} />
      <VideobannerCard videobanner={videobanner} />
      <PerksCard perks={perks} />
      <AboutCard about={about} path={pathname} />
      <EasystepCard easystep={easystep} />
    </>
  );
}
