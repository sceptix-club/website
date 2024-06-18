export interface CouncilMemberType {
    id : number;
    name: string;
    designation: string;
    github_username: string;
    quote: string;
    image?: string;

}

export interface MemberType {
    id : number;
    github_username: string;
    name: string;
    role: string;
    quote: string;
    image?: string;
}

