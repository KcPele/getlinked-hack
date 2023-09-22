"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const Sponsors = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="border-white/20 border-b-2 padding-left padding-right padding-top pb-32"
    >
      <div className="mb-16 text-center">
        <h2 className="mid-font text-p-white">Partners and Sponsors</h2>
        <div className="max-w-[28rem] mt-5 mx-auto">
          <p className="text-p-white text-sm">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
      </div>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="max-w-[78rem] mx-auto"
      >
        <Image
          width={600}
          height={500}
          src="/assets/svg/partner-sponsors.svg"
          alt="partners"
          className="w-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default Sponsors;
