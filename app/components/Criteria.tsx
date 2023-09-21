"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./UI";

const Criteria = () => {
  return (
    <div className="pb-32 padding-left padding-right border-white/20 border-b-2 mt-[3.8rem] grid md:grid-cols-2 gap-4 place-items-center">
      <div>
        <div>
          <Image
            width={600}
            height={500}
            src="/assets/svg/together-chat.svg"
            alt="lady"
          />
        </div>
      </div>
      <div className="text-p-white grid text-center md:text-left">
        <h2 className="mid-font">
          Judging Criteria
          <span className="text-p-mix block">Key attributes</span>
        </h2>
        <div className="max-w-[35rem] mt-[1.3rem] grid gap-7">
          <p className="very-small-font">
            <span className="text-p-pink text-base">
              Innovation and Creativity:
            </span>{" "}
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>
          <p className="very-small-font">
            <span className="text-p-pink text-base">Functionality:</span> Assess
            how well the solution works. Does it perform its intended functions
            effectively and without major issues? Judges would consider the
            completeness and robustness of the solution.
          </p>
          <p className="very-small-font">
            <span className="text-p-pink text-base">
              Impact and Relevance:{" "}
            </span>{" "}
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>
          <p className="very-small-font">
            <span className="text-p-pink text-base">
              Technical Complexity:{" "}
            </span>{" "}
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </p>
          <p className="very-small-font">
            <span className="text-p-pink text-base">
              Adherence to Hackathon Rules:{" "}
            </span>{" "}
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </p>
        </div>
        <div className="mt-10">
          <Button text="Register" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Criteria;
