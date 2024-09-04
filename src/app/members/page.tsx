import { getMembers } from "@/actions";
import { MemberCard } from "@/components/MemberCard";
import { MemberType } from "@/types";
import React from "react";

const Page = async () => {
    const memberList: MemberType[] = await getMembers();
    const renderMembers = (designationFilter: string) => (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-1">
            {memberList
                ?.filter((member: MemberType) =>
                    designationFilter === "Council"
                        ? member.Designation !== "Member" && member.Designation !== "Alumni"
                        : member.Designation === designationFilter
                )
                .map((member: MemberType) => (
                    <div key={member.Name.toString()}>
                        <MemberCard {...member} />
                    </div>
                ))}
        </div>
    );

    return (
        <div className="md:p-20 p-5 font-jetbrains">
            <div>
                <h1 className="md:text-5xl text-3xl font-extrabold mt-5 md:ml-5 text-center font-fira_sans">
                    The Council
                </h1>
                {renderMembers("Council")}
            </div>

            <div>
                <h1 className="md:text-5xl text-3xl font-extrabold mt-5 md:ml-5 text-center font-fira_sans">
                    The Members
                </h1>
                {renderMembers("Member")}
            </div>

            <div>
                <h1 className="md:text-5xl text-3xl font-extrabold mt-5 md:ml-5 text-center font-fira_sans">
                    The Alumni
                </h1>
                {renderMembers("Alumni")}
            </div>
        </div>
    );
};
export default Page;
