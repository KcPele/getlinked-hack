"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const FAQ = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="pb-20 padding-left padding-right border-white/20 border-b-2 mt-[3.8rem] grid md:grid-cols-2 gap-10 md:gap-4 place-items-center"
    >
      <div className="text-p-white grid max-w-[30rem] w-full ">
        <div className="text-center md:text-left">
          <h2 className="mid-font">
            Frequetly Ask
            <span className="text-p-mix block">Question</span>
          </h2>
          <div className="max-w-[22rem]">
            <p>
              We got answers to the questions that you might want to ask about
              getlinked Hackathon 1.0
            </p>
          </div>
        </div>
        <div className="max-w-[28rem] w-full">
          <div className="w-full   mt-8  ">
            <motion.div
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
              transition={{ duration: 0.5 }}
              className="py-5 border-b-[1px] border-p-mix"
            >
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span>
                    {" "}
                    Can I work on a project I started before the hackathon?
                  </span>
                  <span className="transition group-open:rotate-180 text-p-mix">
                    +
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Can I work on a project I started before the hackathon?
                </p>
              </details>
            </motion.div>
            <motion.div
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
              transition={{ duration: 0.5 }}
              className="py-5 border-b-[1px] border-p-mix"
            >
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span>
                    {" "}
                    What happens if I need help during the hackathon?
                  </span>
                  <span className="transition group-open:rotate-180 text-p-mix">
                    +
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  What happens if I need help during the hackathon?
                </p>
              </details>
            </motion.div>
            <motion.div
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
              transition={{ duration: 0.5 }}
              className="py-5 border-b-[1px] border-p-mix"
            >
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span>
                    {" "}
                    What happens if I dont have an idea for a project?
                  </span>
                  <span className="transition group-open:rotate-180 text-p-mix">
                    +
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  What happens if I dont have an idea for a project?
                </p>
              </details>
            </motion.div>
            <motion.div
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
              transition={{ duration: 0.5 }}
              className="py-5 border-b-[1px] border-p-mix"
            >
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span> Can I join a team or do I have to come with one?</span>
                  <span className="transition group-open:rotate-180 text-p-mix">
                    +
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Can I join a team or do I have to come with one?
                </p>
              </details>
            </motion.div>
            <motion.div
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
              transition={{ duration: 0.5 }}
              className="py-5 border-b-[1px] border-p-mix"
            >
              <details className="group ">
                <summary className="w-full flex cursor-pointer list-none items-center justify-between gap-4">
                  <span> What happens after the hackathon ends</span>
                  <span className="transition group-open:rotate-50 text-p-mix">
                    +
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  What happens after the hackathon ends
                </p>
              </details>
            </motion.div>
            <motion.div
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
              transition={{ duration: 0.5 }}
              className="py-5 border-b-[1px] border-p-mix "
            >
              <details className="group ">
                <summary className="w-full flex cursor-pointer list-none items-center justify-between gap-4">
                  <span>
                    {" "}
                    Can I work on a project I started before the hackathon?
                  </span>
                  <span className="transition group-open:rotate-50 text-p-mix">
                    +
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Can I work on a project I started before the hackathon?
                </p>
              </details>
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
            src="/assets/svg/cwok-casual.svg"
            alt="cwok"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FAQ;
