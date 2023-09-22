"use client";
import React from "react";
import { motion } from "framer-motion";
const Timeline = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="padding-left padding-right padding-top"
    >
      <div className="text-p-white grid text-center mx-auto max-w-[21rem]">
        <h2 className="mid-font">Timeline</h2>
        <p className="text-sm">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>

      <div>
        <div className="max-w-[94rem] mx-auto px-4 py-8">
          <div className="relative wrap overflow-hidden">
            {/* <div className="border-2-2  absolute border-opacity-20 border-p-mix h-full border left-1/2"></div> */}
            <motion.div
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
              transition={{ duration: 0.5 }}
              className="mb-7 md:mb-2 gap-3 flex   md:justify-between md:items-center w-full"
            >
              <div className="hidden order-1 w-5/12 self-end md:text-end md:flex flex-col items-end">
                <h3 className="text-p-mix half-mid-font">
                  Hackathon Announcement
                </h3>
                <div className="max-w-[27rem] ">
                  <p className="text-p-white text-sm">
                    Accepted teams can now proceed to build their ground
                    breaking skill driven solutions
                  </p>
                </div>
              </div>
              <div className="z-20 order-1 flex  flex-col items-center justify-between h-auto">
                <div className="w-[2px] sm:h-24 h-28 bg-p-mix mb-2"></div>
                <div className=" flex self-end items-center bg-p-mix  w-12 h-12 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">
                    1
                  </h1>
                </div>
              </div>
              <div className="order-1 grid justify-between md:self-end  h-auto  w-full md:w-5/12 md:p-3">
                <div className="md:hidden">
                  <h3 className="text-p-mix half-mid-font">
                    Hackathon Announcement
                  </h3>
                  <div className="max-w-[27rem] ">
                    <p className="text-p-white text-sm">
                      The getlinked tech hackathon 1.0 is formally announced to
                      the general public and teams begin to get ready to
                      register
                    </p>
                  </div>
                </div>
                <div className="self-center">
                  <h3 className="text-p-mix half-mid-font ">
                    November 18, 2023
                  </h3>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
              transition={{ duration: 0.5 }}
              className="mb-7 md:mb-2 gap-3 flex   md:justify-between md:items-center w-full"
            >
              <div className="hidden order-1 w-5/12 self-end md:text-end md:flex flex-col md:pb-3">
                <h3 className="text-p-mix half-mid-font ">November 18, 2023</h3>
              </div>
              <div className="z-20 order-1 flex pb-1  flex-col items-center md:justify-between h-auto">
                <div className="w-[2px] sm:h-20 h-28 bg-p-mix mb-2"></div>
                <div className=" flex self-end items-center bg-p-mix  w-12 h-12 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">
                    2
                  </h1>
                </div>
              </div>
              <div className="order-1 grid justify-between md:self-end  h-auto  w-full md:w-5/12 md:px-3">
                <div className="">
                  <h3 className="text-p-mix half-mid-font">
                    Teams Registration begins
                  </h3>
                  <div className="max-w-[27rem] ">
                    <p className="text-p-white text-sm">
                      Interested teams can now show their interest in the
                      getlinked tech hackathon 1.0 2023 by proceeding to
                      register
                    </p>
                  </div>
                </div>
                <div className="self-center md:hidden">
                  <h3 className="text-p-mix half-mid-font ">
                    November 18, 2023
                  </h3>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
              transition={{ duration: 0.5 }}
              className="mb-7 md:mb-2 gap-3 flex   md:justify-between md:items-center w-full"
            >
              <div className="hidden order-1 w-5/12 self-end md:text-end md:flex flex-col items-end">
                <h3 className="text-p-mix half-mid-font">
                  Teams Registration ends
                </h3>
                <div className="max-w-[27rem] ">
                  <p className="text-p-white text-sm">
                    Interested Participants are no longer Allowed to register
                  </p>
                </div>
              </div>
              <div className="z-20 order-1 flex  flex-col items-center justify-between h-auto">
                <div className="w-[2px] sm:h-20 h-24 bg-p-mix mb-2"></div>
                <div className=" flex self-end items-center bg-p-mix  w-12 h-12 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">
                    3
                  </h1>
                </div>
              </div>
              <div className="order-1 grid justify-between md:self-end  h-auto  w-full md:w-5/12 md:p-3">
                <div className="md:hidden">
                  <h3 className="text-p-mix half-mid-font">
                    Teams Registration ends
                  </h3>
                  <div className="max-w-[27rem] ">
                    <p className="text-p-white text-sm">
                      Interested Participants are no longer Allowed to register
                    </p>
                  </div>
                </div>
                <div className="self-center">
                  <h3 className="text-p-mix half-mid-font ">
                    November 18, 2023
                  </h3>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
              transition={{ duration: 0.5 }}
              className="mb-7 md:mb-2 gap-3 flex   md:justify-between md:items-center w-full"
            >
              <div className="hidden order-1 w-5/12 self-end md:text-end md:flex flex-col md:pb-3">
                <h3 className="text-p-mix half-mid-font ">November 18, 2023</h3>
              </div>
              <div className="z-20 order-1 flex pb-1  flex-col items-center md:justify-between h-auto">
                <div className="w-[2px] sm:h-20 h-28 bg-p-mix mb-2"></div>
                <div className=" flex self-end items-center bg-p-mix  w-12 h-12 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">
                    4
                  </h1>
                </div>
              </div>
              <div className="order-1 grid justify-between md:self-end  h-auto  w-full md:w-5/12 md:px-3">
                <div className="">
                  <h3 className="text-p-mix half-mid-font">
                    Announcement of the accepted teams and ideas
                  </h3>
                  <div className="max-w-[27rem] ">
                    <p className="text-p-white text-sm">
                      All teams whom idea has been accepted into getlinked tech
                      hackathon 1.0 2023 are formally announced
                    </p>
                  </div>
                </div>
                <div className="self-center md:hidden">
                  <h3 className="text-p-mix half-mid-font ">
                    November 18, 2023
                  </h3>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
              transition={{ duration: 0.5 }}
              className="mb-7 md:mb-2 gap-3 flex   md:justify-between md:items-center w-full"
            >
              <div className="hidden order-1 w-5/12 self-end md:text-end md:flex flex-col items-end">
                <h3 className="text-p-mix half-mid-font">
                  Getlinked Hackathon 1.0 Offically Begins
                </h3>
                <div className="max-w-[27rem] ">
                  <p className="text-p-white text-sm">
                    Accepted teams can now proceed to build their ground
                    breaking skill driven solutions
                  </p>
                </div>
              </div>
              <div className="z-20 order-1 flex  flex-col items-center justify-between h-auto">
                <div className="w-[2px] sm:h-20 h-24 bg-p-mix mb-2"></div>
                <div className=" flex self-end items-center bg-p-mix  w-12 h-12 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">
                    5
                  </h1>
                </div>
              </div>
              <div className="order-1 grid justify-between md:self-end  h-auto  w-full md:w-5/12 md:p-3">
                <div className="md:hidden">
                  <h3 className="text-p-mix half-mid-font">
                    Getlinked Hackathon 1.0 Offically Begins{" "}
                  </h3>
                  <div className="max-w-[27rem] ">
                    <p className="text-p-white text-sm">
                      Accepted teams can now proceed to build their ground
                      breaking skill driven solutions
                    </p>
                  </div>
                </div>
                <div className="self-center">
                  <h3 className="text-p-mix half-mid-font ">
                    November 18, 2023
                  </h3>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
              transition={{ duration: 0.5 }}
              className="mb-7 md:mb-2 gap-3 flex   md:justify-between md:items-center w-full"
            >
              <div className="hidden order-1 w-5/12 self-end md:text-end md:flex flex-col md:pb-3">
                <h3 className="text-p-mix half-mid-font ">November 18, 2023</h3>
              </div>
              <div className="z-20 order-1 flex pb-1  flex-col items-center md:justify-between h-auto">
                <div className="w-[2px] sm:h-20 h-28 bg-p-mix mb-2"></div>
                <div className=" flex self-end items-center bg-p-mix  w-12 h-12 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">
                    6
                  </h1>
                </div>
              </div>
              <div className="order-1 grid justify-between md:self-end  h-auto  w-full md:w-5/12 md:px-3">
                <div className="">
                  <h3 className="text-p-mix half-mid-font">Demo Day</h3>
                  <div className="max-w-[27rem] ">
                    <p className="text-p-white text-sm">
                      Teams get the opportunity to pitch their projects to
                      judges. The winner of the hackathon will also be announced
                      on this day
                    </p>
                  </div>
                </div>
                <div className="self-center md:hidden">
                  <h3 className="text-p-mix half-mid-font ">
                    November 18, 2023
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Timeline;
