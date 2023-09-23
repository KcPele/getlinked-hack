"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const Guidelines = () => {
  return (
    <div className="relative overflow-x-clip  pb-20 padding-left padding-right border-white/20 border-b-2 mt-[3.8rem] grid  md:grid-cols-2 gap-4 place-items-center">
      <div className=" absolute mix-blend-hard-light left-0 -z-30 max-w-[64rem] -top-72 w-full">
        <Image
          alt=""
          src="/assets/image/left-guideline-purple.png"
          layout="responsive"
          width={500}
          height={500}
          className="-z-30 w-full"
        />
      </div>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="order-last md:order-first text-p-white grid text-center md:text-left"
      >
        <h2 className="mid-font">
          Rules and
          <span className="text-p-mix block">Guidelines</span>
        </h2>
        <div className="max-w-[35rem]">
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you&apos;re a
            coding genius, a design maverick, or a concept wizard, you&apos;ll
            have the chance to transform your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world, that&apos;s what
            we&apos;re all about!
          </p>
        </div>
      </motion.div>
      <div>
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.7 }}
          className="md:hidden"
        >
          <Image
            width={600}
            height={500}
            src="/assets/svg/good-lady.svg"
            alt="lady"
          />
        </motion.div>
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.7 }}
          className="hidden md:block"
        >
          <Image
            width={600}
            height={500}
            src="/assets/svg/good-lady-ellipse.svg"
            alt="lady"
          />
        </motion.div>
      </div>
      <div className=" absolute mix-blend-hard-light top-20 right-0 -z-30 max-w-[25rem]  w-full">
        <Image
          alt=""
          src="/assets/image/right-guideline-purple.png"
          layout="responsive"
          width={500}
          height={500}
          className="-z-30 w-full"
        />
      </div>
    </div>
  );
};

export default Guidelines;
