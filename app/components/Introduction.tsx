import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <div className="pb-20 padding-left padding-right border-white/20 border-b-2 mt-[3.8rem] grid md:grid-cols-2 gap-4 place-items-center">
      <div>
        <div>
          <Image
            width={500}
            height={500}
            src="/assets/svg/big-idea.svg"
            alt="lady"
          />
        </div>
      </div>
      <div className="text-p-white grid text-center md:text-left">
        <h2 className="mid-font">
          Introduction to getlinked
          <span className="text-p-mix block">tech Hackathon 1.0</span>
        </h2>
        <div className="max-w-[35rem]">
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
