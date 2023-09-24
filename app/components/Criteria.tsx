"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./UI";
import { motion } from "framer-motion";
const Criteria = () => {
  return (
    <div className="overflow-x-clip relative pb-32 padding-left padding-right border-white/20 border-b-2 mt-[3.8rem] grid md:grid-cols-2 gap-4 place-items-center">
      <div className="relative">
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
          className="md:hidden"
        >
          <Image
            width={600}
            height={500}
            src="/assets/svg/together-chat.svg"
            alt="lady"
          />
        </motion.div>
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <Image
            width={600}
            height={500}
            src="/assets/svg/together-chat-ellipse.svg"
            alt="lady"
          />
        </motion.div>
        <div className="top-20  absolute mix-blend-hard-light -z-30 max-w-[64rem]  w-full">
          <Image
            alt=""
            src="/assets/image/left-guideline-purple.png"
            layout="responsive"
            width={500}
            height={500}
            className="-z-30 w-full"
          />
        </div>
      </div>
      <div className="text-p-white grid text-center md:text-left">
        <h2 className="mid-font">
          Judging Criteria
          <span className="text-p-mix block">Key attributes</span>
        </h2>
        <div className="font-mont max-w-[35rem] mt-[1.3rem] grid gap-7">
          <motion.p
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            className="very-small-font font-mont"
          >
            <span className="text-p-pink text-base">
              Innovation and Creativity:
            </span>{" "}
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </motion.p>
          <motion.p
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            className="very-small-font"
          >
            <span className="text-p-pink text-base">Functionality:</span> Assess
            how well the solution works. Does it perform its intended functions
            effectively and without major issues? Judges would consider the
            completeness and robustness of the solution.
          </motion.p>
          <motion.p
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            className="very-small-font"
          >
            <span className="text-p-pink text-base">
              Impact and Relevance:{" "}
            </span>{" "}
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </motion.p>
          <motion.p
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            className="very-small-font"
          >
            <span className="text-p-pink text-base">
              Technical Complexity:{" "}
            </span>{" "}
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </motion.p>
          <motion.p
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            className="very-small-font"
          >
            <span className="text-p-pink text-base">
              Adherence to Hackathon Rules:{" "}
            </span>{" "}
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </motion.p>
        </div>
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <Button text="Register" onClick={() => {}} />
        </motion.div>
      </div>
      <div className="-right-44 md:-right-[20rem] bottom-0 md:top-16 absolute mix-blend-hard-light -z-30 max-w-[64rem]  w-full">
        <Image
          alt=""
          src="/assets/image/right-criteria-purple.png"
          layout="responsive"
          width={500}
          height={500}
          className="-z-30 w-full"
        />
      </div>
    </div>
  );
};

export default Criteria;
