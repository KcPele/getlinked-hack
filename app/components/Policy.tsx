"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./UI";
import { motion } from "framer-motion";
const Policy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="pb-36 padding-left padding-right  mt-[3.8rem] grid md:grid-cols-2 gap-4 place-items-center"
    >
      <div className="mb-24  md:mb-0 text-p-white grid max-w-[36rem] w-full ">
        <div className="text-center md:text-left grid w-full ">
          <h2 className="mid-font">
            PrivacyPolicy and
            <span className="text-p-mix block">Terms</span>
          </h2>
          <motion.p
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            className="mt-5 text-white/75 text-sm"
          >
            Last updated on September 12, 2023
          </motion.p>
          <motion.p
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            className="text-white mt-7"
          >
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </motion.p>
        </div>
        <div className="mt-16 w-full px-2 py-4 lg:py-[3.6rem] lg:px-16  ">
          <div className="text-center md:text-left grid ">
            <motion.p
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
              transition={{ duration: 0.5 }}
              className="text-sm"
            >
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </motion.p>
          </div>
          <div className="text-p-white mt-6">
            <p className="text-p-mix font-bold">Licensing Policy</p>
            <p className="text-sm">Here are terms of our Standard License:</p>
            <motion.div
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
              transition={{ duration: 0.5 }}
              className="mt-6 flex gap-[0.88rem]"
            >
              <div className="max-w-[1rem]">
                <Image
                  width={50}
                  height={50}
                  src="/assets/svg/good-tick.svg"
                  alt="cwok"
                />
              </div>
              <p className="text-sm">
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </motion.div>
            <motion.div
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
              transition={{ duration: 0.5 }}
              className="mt-5 flex gap-[0.88rem]"
            >
              <div className="max-w-[1rem]">
                <Image
                  width={50}
                  height={50}
                  src="/assets/svg/good-tick.svg"
                  alt="cwok"
                />
              </div>
              <p className="text-sm">
                You are licensed to use the item available at any free source
                sites, for your project developement
              </p>
            </motion.div>
            <motion.div
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
              transition={{ duration: 0.5 }}
              className="text-center mt-4"
            >
              <Button text="Read More" />
            </motion.div>
          </div>
        </div>
      </div>
      <div>
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <Image
            width={600}
            height={500}
            src="/assets/svg/man-on-lock.svg"
            alt="cwok"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Policy;
