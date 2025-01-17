import { Assessments } from "./types";
import { Link } from "./Link";

export default function AssessmentCard({ assessments }:Assessments) {
    return (
        <>
            {assessments.map((assessment, index) => (
                <Link to={assessment.url}>
                <div key={index} className="relative text-center overflow-hidden rounded-3xl bg-blue-brand/10 p-6 text-center lg:p-14 aos-init aos-animate"  data-aos="fade-up"
                data-aos-delay="100">
                   { assessment.image && <img src={assessment.image} alt={assessment.title} className="mx-auto mb-2" /> }
                    <h2>{assessment.title}</h2>
                </div>
                </Link>
            ))}
        </>
    );
};