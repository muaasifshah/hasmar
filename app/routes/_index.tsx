import { json, type MetaFunction } from "@remix-run/node";
import HeroCard from "../ui/HeroCard";
import AboutCard from "../ui/AboutCard";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
    { name: "keywords", content: "Remix, React Learn" },
  ];
};

export default function Index() {
  return (
    <>
      <HeroCard />
      <AboutCard />
    </>
  );
}
