"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./UI";
import { useRouter } from "next/navigation";
import { Unica_One } from "next/font/google";

const unicaOne = Unica_One({ weight: ["400"], subsets: ["latin"] });

const Header = () => {
  const router = useRouter();
  return (
    <div className="border-white/20 border-b-2 -z-40 ">
      <div className="z-[1000] w-full padding-left  grid   place-items-end pr-[3.4rem] ">
        <h3 className="font-mont italic  text-p-white semi-mid-font mb-0">
          Igniting a Revolution in HR Innovation
        </h3>
        <div className="pr-4 ">
          <Image
            alt="curved line"
            src="/assets/svg/curved-line.svg"
            width={220}
            height={8}
          />
        </div>
      </div>
      <div className=" grid md:grid-flow-col    mt-16">
        <div className=" w-full px-4 md:pl-16 lg:pl-32 flex flex-col items-center  md:items-start">
          <div className="grid    place-items-end">
            <div className="pr-2 relative">
              <div>
                <Image
                  alt="light bulb"
                  src="/assets/svg/light-bulb.svg"
                  width={40}
                  height={60}
                />
              </div>
            </div>
            <div className="header--getlinked-text">
              <h2 className="text-p-white m-0 large-font">getlinked Tech</h2>
            </div>
          </div>
          <div className="flex items-center">
            <h2 className="text-p-white  large-font">
              Hackathon <span className="text-p-mix">1.0</span>
            </h2>
            <div className="ml-1">
              <Image
                alt="chain"
                src="/assets/svg/chain.svg"
                width={60}
                height={60}
              />
            </div>
            <div>
              <Image
                alt="explosion"
                src="/assets/svg/explosion.svg"
                width={40}
                height={40}
              />
            </div>
          </div>
          <div className="  max-w-[32rem] w-full  ">
            <p className="half-mid-font text-p-white">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
          </div>
          <div className="mt-[2.5rem]">
            <Button
              customeClassName="text-p-white"
              onClick={() => {
                router.push("/register");
              }}
              text="Register"
            />
          </div>

          <div className={`text-p-white mt-[4.8rem] ${unicaOne.className}`}>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
              <div className="flex items-end">
                <span className=" text-[4rem]">
                  <span>00</span>
                </span>
                <span className="text-[0.85rem] pb-6">H</span>
              </div>

              <div className="flex items-end">
                <span className=" text-[4rem]">
                  <span>00</span>
                </span>
                <span className="text-[0.85rem] pb-6">M</span>
              </div>
              <div className="flex items-end">
                <span className=" text-[4rem]">
                  <span>00</span>
                </span>
                <span className="text-[0.85rem] pb-6 ">S</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative self-end  max-w-[51rem]">
          <div className="z-50 absolute left-10 ">
            <Image
              alt="human virtual reality"
              src="/assets/image/earth-glow.png"
              width={500}
              height={400}
              className=" min-w-[300px]   w-full"
            />
          </div>
          <div className=" -top-32 hidden  md:flex justify-center items-center absolute mix-blend-hard-light overflow-hidden  h-[500px] max-w-[64rem]  w-full">
            <Image
              alt=""
              src="/assets/image/purple-top-right.png"
              layout="responsive"
              width={500}
              height={500}
              className=" w-full mix-blend-hard-light "
            />
          </div>

          <div className="">
            <Image
              alt="human virtual reality"
              src="/assets/image/man-virtaul-screen.png"
              width={600}
              height={500}
              className=" min-w-[300px] w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
