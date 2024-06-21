import React from "react";
import EmailIcon from "./svgs/GithubIcon";
import InstagramIcon from "./svgs/InstagramIcon";
import LinkedInIcon from "./svgs/LinkedInIcon";
import GithubIcon from "./svgs/GithubIcon";
import Image from "next/image";
import { assetsPrefix } from "@/lib/helper";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-black ">
      <div className="container flex flex-col justify-between py-10 pb-5 mx-auto lg:px-10 space-y-8 md:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="/"
            className="flex justify-center space-x-3 lg:justify-start md:p-5"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full">
              <Image
                src="https://sceptix-club.github.io/website-assets/icons/logo_square.png"
                width={150}
                height={150}
                alt={"Logo"}
                className="bg-white rounded-full"
              />
            </div>
            <span className="self-center text-2xl font-semibold font-fira_sans">
              {" "}
              The sceptix club
            </span>
          </a>
        </div>
        <div className=" w-1/2  text-sm  lg:w-1/2  place-self-center ">
          <div className="space-y-3 flex flex-col max-w-1/2  md:items-end items-center">
            <div className="uppercase text-lg text-white font-jetbrains">
              Social media
            </div>
            <div className="flex  space-x-3">
              <Link
                rel="noopener noreferrer"
                href="https://www.instagram.com/the_sceptix_club"
                title="Instagram"
                className="flex items-center px-2 scale-125"
              >
                <InstagramIcon />
              </Link>
              <Link
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/sceptix"
                title="LinkedIn"
                className="flex items-center px-2 scale-125"
              >
                <LinkedInIcon />
              </Link>
              <Link
                rel="noopener noreferrer"
                href="https://github.com/sceptix-club"
                title="Github"
                className="flex items-center px-2 scale-125"
              >
                <GithubIcon />
              </Link>
              {/* <a
                rel="noopener noreferrer"
                href="#"
                title="Email"
                className="flex items-center p-1"
              >
                <EmailIcon />
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center  text-neutral-200 font-jetbrains">
        © 2024 sceptix . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
