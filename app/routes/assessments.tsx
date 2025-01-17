import { json, type MetaFunction } from "@remix-run/node";
import PageHeader from "~/ui/PageHeader";
import TestimonialCard from "~/ui/TestimonialCard";
import CouplesvideoCard from "~/ui/CouplesvideoCard";
import FeaturesCard from "~/ui/AudienceFeaturesCard";
import ProcessCard from "~/ui/ProcessCard";

import { LoaderFunctionArgs } from "@remix-run/node";
import api from "~/http/api";
import { useLoaderData } from "@remix-run/react";
import AssessmentSection from "~/ui/AssessmentSection";

export const loader = async ({}: LoaderFunctionArgs) => {
  const baseURL = process.env.VITE_BASE_URL;
  const data = await api.get(baseURL + "/assessments");
  return json(data.data);
};

export const meta: MetaFunction = () => {
  return [
    { title: "Individuals and Couples - HaSMaR" },
    {
      name: "description",
      content:
        "We offer tailored support and resources to help couples strengthen",
    },
    {
      name: "keywords",
      content:
        "Relationship Adviser, Relationship Adviser, Dealing with Conflict",
    },
  ];
};

export default function Audience() {
  const { pageheader, assessments } =
    useLoaderData<typeof loader>();
  return (
    <>
      <PageHeader pageheader={pageheader} />
      <AssessmentSection assessments={assessments}/>
    </>
  );
}
