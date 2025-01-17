import FeatureCards from "./FeatureCards";
import Section from "./Section";
import { CoreValues } from "./types";

export default function OurCoreValues({coreValues}: {coreValues: CoreValues}) {
    return (
        <Section>
            <div className="mb-16 text-center">
                <span className="mb-5 inline-block text-xl font-medium uppercase leading-[1.35] tracking-[0.03rem] text-blue-brand">{coreValues.subtitle}</span>
                <h3 className="text-center text-4xl font-bold capitalize text-gray-900 dark:text-white lg:text-[2.625rem]">{coreValues.title}</h3>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <FeatureCards features={coreValues.values} />
            </div>
        </Section>
    )
}