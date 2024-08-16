import { json, type MetaFunction } from "@remix-run/node";
import AboutCard from "~/ui/AboutCard";
import PageHeader from "~/ui/PageHeader";
import ExperienceCard from "../ui/ExperienceCard";
import FunfactsCard from "../ui/FunfactsCard";
import TestimonialCard from "~/ui/TestimonialCard";

import { LoaderFunctionArgs } from "@remix-run/node";
import api from "~/http/api";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({}: LoaderFunctionArgs) => {
  const baseURL = process.env.VITE_BASE_URL;
  const data = await api.get(baseURL + "/aboutpage");
  return json(data.data);
};

export const meta: MetaFunction = () => {
  return [
    { title: "About - HaSMaR" },
    { name: "description", content: "Welcome to The HaSMaR Institute" },
    {
      name: "keywords",
      content:
        "Relationship Adviser, Relationship Adviser, Dealing with Conflict",
    },
  ];
};

export default function About() {
  const { pageheader, about, experience, funfacts, testimonial } =
    useLoaderData<typeof loader>();
  return (
    <>
      <PageHeader pageheader={pageheader} />
      <AboutCard about={about} path="" />
      <ExperienceCard experience={experience} />
      <FunfactsCard funfacts={funfacts} />
      <TestimonialCard testimonial={testimonial} />
    </>
  );
}
