import { MemberCard } from "@/components/MemberCard";
import React from "react";
import { council, members } from "@/data/members";
import { CouncilMemberType, MemberType } from "@/types";

type Props = {};

const Members = (props: Props) => {
  return (
    <>
      <div className="md:p-20 p-5 font-jetbrains">
        <div className="">
          <h1 className="md:text-5xl text-3xl font-extrabold mt-5 md:ml-5 justify-center text-center font-fira_sans">
            The Council
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-1 auto-rows-max ">
            {council.map((member: CouncilMemberType) => (
              <div key={member.id}>
                <MemberCard {...member} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="md:text-5xl text-3xl font-extrabold mt-5 md:ml-5 justify-center text-center font-fira_sans">
            The Members
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-1">
            {members.map((member: MemberType) => (
              <div key={member.id}>
                <MemberCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Members;
