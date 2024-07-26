import { json, type MetaFunction } from "@remix-run/node";
import HeroCard from "../ui/HeroCard";
import AboutCard from "../ui/AboutCard";

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
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
    { name: "keywords", content: "Remix, React Learn" },
  ];
};

export default function Index() {
  const [{ hero, about }] = useLoaderData<typeof loader>();
  return (
    <>
      <HeroCard hero={hero} />
      <AboutCard about={about} />
    </>
  );
}
