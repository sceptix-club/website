import { CouncilCard } from "@/components/CouncilCard";
import React from "react";

type Props = {};

const Members = (props: Props) => {
  return (
    <>
      <div className="p-20 font-jetbrains">
        <h1 className="text-3xl font-extrabold ">Members</h1>
        <CouncilCard />
      </div>
    </>
  );
};

export default Members;
