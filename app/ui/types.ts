export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    socials: {
        icon: string;
        url: string;
    }[];
}

export interface TeamCardProps {
    team: {
        title: string;
        subtitle: string;
        members: TeamMember[];
    };
}

export interface Feature {
    id: string;
    title: string;
    description: string;
    image: string;
  }
  
  export interface Features {
    features: Feature[];
  }

  export interface CoreValues {
    title: string;
    subtitle: string;
    values: Feature[];
  }

  export interface Assessments {
    assessments:{
      title: string;
      image: string;
      url: string;
    }[];
  }