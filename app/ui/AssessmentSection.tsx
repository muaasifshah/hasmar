import AssessmentCard from "./AssessmentCard";
import Section from "./Section";
import { Assessments } from "./types";

export default function AssessmentSection({assessments}:Assessments) {
    return (
        <Section>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
                <AssessmentCard assessments={assessments}/>
            </div>
        </Section>
    );
}