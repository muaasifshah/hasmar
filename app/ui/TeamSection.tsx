import TeamCard from "./TeamCard";
import { TeamCardProps } from "./types";

export default function TeamSection({ team }: TeamCardProps) {
    return (
        <section className="relative z-0 overflow-hidden bg-gradient-to-b from-transparent to-blue-brand/10 dark:to-gray-800 dark:bg-gray-900">
            <div className="container mx-auto px-4 py-14 lg:px-12 lg:py-24">
                <div className="mb-16 text-center">
                    <span className="mb-5 inline-block text-xl font-medium uppercase leading-[1.35] tracking-[0.03rem] text-blue-brand">
                        {team.subtitle}
                    </span>
                    <h3 className="text-center text-4xl font-bold capitalize text-gray-900 dark:text-white lg:text-[2.625rem]">
                        {team.title}
                    </h3>
                </div>
                <TeamCard members={team.members} />
            </div>
        </section>
    );
}