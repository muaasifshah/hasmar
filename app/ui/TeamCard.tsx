import { TeamMember } from "./types";
import Icon from "./Icon/Icon";
import { IconName } from "public/icons/name";

export default function TeamCard({ members }: { members: TeamMember[] }) {
    return (
        <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            { members.map(member => (
                <div key={member.id} className="flex flex-col items-center justify-center rounded-[10px] bg-white p-5 text-center jos" data-jos_animation="flip-left" data-jos_once="1" data-jos_timingfunction="ease" data-jos_duration="0.7" data-jos_delay="0.5" data-jos_counter="1">
                    <img src={member.image} alt="team-img-1" width="266" height="250" className="h-auto w-full rounded-[10px] lg:w-auto"/>
                    <div className="mb-4 mt-6">
                        <div className="mb-1 text-xl font-semibold">{member.name}</div>
                        <span className="block text-opacity-80">{member.role}</span>
                    </div>

                    <div className="flex flex-wrap gap-[10px] xl:gap-4">
                       { member.socials.map((social) => (
                        <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-black bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white cursor-pointer" aria-label="twitter">
                        <Icon
                            id={social.icon as IconName}
                            className="inline-block h-[1.125rem] w-[1.125rem] fill-current"
                        />
                        </a>
                       )) }
                       
                    </div>
                </div>
            ))  }
        </div>
    );
}