import React from "react";
import { Logo } from "./UI";
import Link from "next/link";
import Image from "next/image";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterXFill,
} from "react-icons/ri";
const Footer = () => {
  return (
    <div className="bg-f-black padding-left padding-right pt-[4.3rem] pb-[3.3rem]">
      <div>
        <div className="max-w-[67.8rem] mx-auto grid md:grid-flow-col gap-8 md:gap-3">
          <div className="grid gap-4 justify-between ">
            <div>
              <Logo />
              <p className="text-p-white max-w-[25.7rem] extra-small-font">
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of
                showcasing young and talented individuals in the field of
                technology
              </p>
            </div>
            <div className="text-p-white flex">
              <p>Team of Use</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="grid sm:grid-flow-col justify-between gap-16 sm:gap-2">
            <div className="grid gap-2">
              <h3 className="text-p-mix very-small-font">Useful Links</h3>
              <ul className=" extra-small-font text-p-white gap-3 grid">
                <li>
                  <Link href="#">Overview</Link>
                </li>
                <li>
                  <Link href="#">Timeline</Link>
                </li>
                <li>
                  <Link href="#">FAQs</Link>
                </li>
                <li>
                  <Link href="#">Register</Link>
                </li>
              </ul>
              <div className="flex items-center gap-4">
                <p className="extra-small-font text-p-mix">Follow us</p>
                <div className="flex gap-4">
                  <RiInstagramLine className="text-white" size={25} />
                  <RiTwitterXFill className="text-white" size={25} />

                  <RiFacebookFill className="text-white" size={25} />

                  <RiLinkedinFill className="text-white" size={25} />
                </div>
              </div>
            </div>
            <div className="">
              <h3 className="text-p-mix very-small-font">Contact Us</h3>
              <div className="flex mt-4 items-center gap-4">
                <Image
                  alt="call"
                  src="/assets/svg/call.svg"
                  width={12}
                  height={12}
                />
                <p className="extra-small-font text-p-white">+234 6707653444</p>
              </div>
              <div className=" flex mt-5 items-start gap-4">
                <Image
                  alt="location"
                  src="/assets/svg/location.svg"
                  width={13}
                  height={13}
                />
                <div className="max-w-[5.5rem]">
                  <p className="extra-small-font text-p-white">
                    27,Alara Street Yaba 100012 Lagos State
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-12  text-center">
          <p className="text-p-white extra-small-font">
            All rights reserved. © getlinked Ltd.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
