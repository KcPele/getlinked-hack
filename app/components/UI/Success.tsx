"use client";
import Image from "next/image";
import React, { FC } from "react";
import { Button } from ".";
import { motion } from "framer-motion";
const Success: FC<{
  onClick: () => void;
}> = ({ onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-[#150E28ED] opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        <div className="inline-block align-bottom  rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-[43.5rem] mx-auto w-full sm:p-6">
          <div>
            <Image
              width={600}
              height={500}
              src="/assets/svg/congratulation.svg"
              alt="successful"
            />
          </div>
          <div className="text-p-white max-w-[34rem] mx-auto text-center">
            <h3 className="mid-font">
              Congratulations <br /> you have successfully Registered!
            </h3>
            <div className="max-w[15rem] mt-4">
              Yes, it was easy and you did it! <br /> check your mail box for
              next step
              <div className="max-w-[20px]">
                <Image
                  src="/assets/svg/wink-emoji-woman.svg"
                  width={50}
                  height={50}
                  alt="line"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <div className="w-full mt-8">
            <Button
              onClick={onClick}
              text="Back"
              customeClassName="w-full text-white"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Success;
