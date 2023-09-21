import React from "react";

const Timeline = () => {
  return (
    <div className="padding-left padding-right padding-top">
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
            <div className="mb-8 gap-3 flex   md:justify-between md:items-center w-full">
              <div className="hidden order-1 w-5/12 self-end md:text-end md:flex flex-col items-end">
                <h3 className="text-p-mix text-2xl">Hackathon Announcement</h3>
                <div className="max-w-[27rem] ">
                  <p className="text-p-white text-sm">
                    The getlinked tech hackathon 1.0 is formally announced to
                    the general public and teams begin to get ready to register
                  </p>
                </div>
              </div>
              <div className="z-20 order-1 flex  flex-col items-center justify-between h-auto">
                <div className="w-[2px] h-24 bg-p-mix mb-2"></div>
                <div className=" flex self-end items-center bg-p-mix  w-12 h-12 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">
                    1
                  </h1>
                </div>
              </div>
              <div className="order-1 grid justify-between md:self-end  h-auto  w-full md:w-5/12 md:p-3">
                <div className="md:hidden">
                  <h3 className="text-p-mix text-2xl">
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
                  <h3 className="text-p-mix text-2xl ">November 18, 2023</h3>
                </div>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12 ">
                <h3 className="text-p-mix text-2xl">
                  Teams Registration begins
                </h3>
                <div className="max-w-[27rem] ">
                  <p className="text-p-white text-sm">
                    Interested teams can now show their interest in the
                    getlinked tech hackathon 1.0 2023 by proceeding to register
                  </p>
                </div>
              </div>
              <div className="z-20 flex items-center order-1 bg-p-mix  w-12 h-12 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
              </div>
              <div className="order-1  rounded-lg  w-5/12 px-6 py-4 text-end">
                <h3 className="text-p-mix text-2xl">November 18, 2023</h3>
              </div>
            </div>
            {/* <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12 md:text-end flex flex-col items-end">
                <h3 className="text-p-mix text-2xl">Hackathon Announcement</h3>
                <div className="max-w-[27rem] ">
                  <p className="text-p-white text-sm">
                    The getlinked tech hackathon 1.0 is formally announced to
                    the general public and teams begin to get ready to register
                  </p>
                </div>
              </div>
              <div className="z-20 flex items-center order-1 bg-p-mix  w-12 h-12 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
              </div>
              <div className="order-1  rounded-lg  w-5/12 px-6 py-4">
                <h3 className="text-p-mix text-2xl">November 18, 2023</h3>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12 ">
                <h3 className="text-p-mix text-2xl">
                  Teams Registration begins
                </h3>
                <div className="max-w-[27rem] ">
                  <p className="text-p-white text-sm">
                    Interested teams can now show their interest in the
                    getlinked tech hackathon 1.0 2023 by proceeding to register
                  </p>
                </div>
              </div>
              <div className="z-20 flex items-center order-1 bg-p-mix  w-12 h-12 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">4</h1>
              </div>
              <div className="order-1  rounded-lg  w-5/12 px-6 py-4 text-end">
                <h3 className="text-p-mix text-2xl">November 18, 2023</h3>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12 md:text-end flex flex-col items-end">
                <h3 className="text-p-mix text-2xl">Hackathon Announcement</h3>
                <div className="max-w-[27rem] ">
                  <p className="text-p-white text-sm">
                    The getlinked tech hackathon 1.0 is formally announced to
                    the general public and teams begin to get ready to register
                  </p>
                </div>
              </div>
              <div className="z-20 flex items-center order-1 bg-p-mix  w-12 h-12 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">5</h1>
              </div>
              <div className="order-1  rounded-lg  w-5/12 px-6 py-4">
                <h3 className="text-p-mix text-2xl">November 18, 2023</h3>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12 ">
                <h3 className="text-p-mix text-2xl">
                  Teams Registration begins
                </h3>
                <div className="max-w-[27rem] ">
                  <p className="text-p-white text-sm">
                    Interested teams can now show their interest in the
                    getlinked tech hackathon 1.0 2023 by proceeding to register
                  </p>
                </div>
              </div>
              <div className="z-20 flex items-center order-1 bg-p-mix  w-12 h-12 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">6</h1>
              </div>
              <div className="order-1  rounded-lg  w-5/12 px-6 py-4 text-end">
                <h3 className="text-p-mix text-2xl">November 18, 2023</h3>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
