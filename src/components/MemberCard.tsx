import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";
import Link from "next/link";
import { MemberType } from "@/types";
import DynamicImage from "./DynamicImage/dynamic-image";

export async function MemberCard({
    Name,
    GithubUrl,
    LinkedinUrl,
    Quote,
    ImageUrl,
    Team,
    Designation,
    RolePriority,
}: MemberType) {
    return (
        <CardContainer className="inter-var w-80 h-max">
            <CardBody className=" relative group/card flex flex-col hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[30rem] h-full rounded-xl p-6 border text-center align-middle items-center ">
                <CardItem translateZ="80" className="w-full mt-4">
                    <DynamicImage url={ImageUrl.toString()} alt={Name} />
                    {/* <Image src={ImageUrl} alt={Name} width="300" height="300" className="rounded-lg" /> */}
                </CardItem>
                <CardItem translateZ="80" as="h1" className="text-xl font-bold text-white mt-4 text-center">
                    {Name}
                </CardItem>
                {Designation && Designation !== "Member" && Designation !== "Alumni" && (
                    <CardItem as="p" translateZ="70" className="text-md max-w-sm mt-2 text-neutral-300">
                        {Designation}
                    </CardItem>
                )}
                <CardItem
                    as="p"
                    translateZ="70"
                    className="text-xl max-w-sm text-neutral-300 font-zilla mt-5 whitespace-pre-wrap"
                >
                    {Quote}
                </CardItem>
                <CardItem translateZ="80" className="justify-between mt-5 flex">
                    {GithubUrl && (
                        <Link href={GithubUrl}>
                            <Image
                                src="/icons/github.png"
                                alt="github"
                                width="40"
                                height="40"
                                className="invert mx-3"
                            />
                        </Link>
                    )}
                    {LinkedinUrl && (
                        <Link href={LinkedinUrl} passHref>
                            <Image
                                src="/icons/linkedin.png"
                                alt="github"
                                width="40"
                                height="40"
                                className="invert mx-3"
                            />
                        </Link>
                    )}
                </CardItem>
                <div className="flex justify-between items-center mt-2"></div>
            </CardBody>
        </CardContainer>
    );
}
