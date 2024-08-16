import { json, type MetaFunction } from "@remix-run/node";
import HeroCard from "../ui/HeroCard";
import AboutCard from "../ui/AboutCard";
import ProductCard from "~/ui/ProductCard";
import TestimonialCard from "~/ui/TestimonialCard";
import FacilityCard from "~/ui/FacilityCard";
import SponsorCard from "~/ui/SponsorCard";

import { LoaderFunctionArgs } from "@remix-run/node";
import api from "~/http/api";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({}: LoaderFunctionArgs) => {
  const baseURL = process.env.VITE_BASE_URL;
  const data = await api.get(baseURL + "/homepage");
  return json(data.data);
};

export const meta: MetaFunction = () => {
  return [
    { title: "The HaSMaR Institute" },
    { name: "description", content: "Welcome to The HaSMaR Institute" },
    {
      name: "keywords",
      content:
        "Relationship Adviser, Relationship Adviser, Dealing with Conflict",
    },
  ];
};

export default function Index() {
  const { hero, about, product, testimonial, facility, sponsor } =
    useLoaderData<typeof loader>();
  return (
    <>
      <HeroCard hero={hero} />
      <AboutCard about={about} />
      <ProductCard product={product} />
      <TestimonialCard testimonial={testimonial} />
      <FacilityCard facility={facility} />
      <SponsorCard sponsor={sponsor} />
    </>
  );
}
