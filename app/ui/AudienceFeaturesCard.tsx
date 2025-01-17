import FeatureCards from "./FeatureCards";
import Section from "./Section";
import { Features } from "./types";

export default function AudienceFeaturesCard({ features }: Features) {
  return (
    <Section className="bg-blue-brand/10 dark:bg-gray-800">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCards features={features} />
      </div>
    </Section>
  );
}
