import { Url } from "url";

// export interface CouncilMemberType {
//     name: string;
//     role: string;
//     github_link: string;
//     linkedin_link: string;
//     quote: string;
//     quote2: string;
//     quote3: string;
//     image?: string;
// }

export interface MemberType {
    Name: string;
    GithubUrl: Url | string;
    LinkedinUrl?: Url | string;
    Quote: String;
    ImageUrl: String;
    Team?: String;
    Designation?: String;
    RolePriority?: number;
    id: string;
}

export interface EventsType {
    title: string;
    description: string;
    image?: string;
}
