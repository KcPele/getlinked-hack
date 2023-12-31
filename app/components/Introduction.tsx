"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const Introduction = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      id="overview"
      className="pb-20 padding-left padding-right border-white/20 border-b-2 mt-[3.8rem] grid md:grid-cols-2 gap-4 place-items-center"
    >
      <div className="relative">
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <Image
            width={500}
            height={500}
            src="/assets/svg/big-idea.svg"
            alt="lady"
          />
        </motion.div>
        <div className="hidden md:block absolute -bottom-5 md:-right-5 lg:-right-16">
          <Image
            width={100}
            height={100}
            src="/assets/image/arrow.png"
            alt="arrow"
            className="w-full"
          />
        </div>
      </div>
      <div className=" md:hidden">
        <Image
          width={100}
          height={100}
          src="/assets/image/arrow.png"
          alt="arrow"
          className="w-full"
        />
      </div>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="text-p-white grid text-center md:text-left"
      >
        <h2 className="mid-font">
          Introduction to getlinked
          <span className="text-p-mix block">tech Hackathon 1.0</span>
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
    </motion.div>
  );
};

export default Introduction;
