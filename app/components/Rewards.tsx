import Image from "next/image";
import React from "react";

const Rewards = () => {
  return (
    <div className=" pb-32 padding-left padding-right  mt-[3.8rem] flex flex-col items-center justify-center  lg:flex-row gap-4">
      <div className="hidden flex-1 lg:flex  ">
        <div className="max-w-[34rem] ">
          <Image
            width={600}
            height={500}
            className="w-full"
            src="/assets/svg/trophy.svg"
            alt="lady"
          />
        </div>
      </div>
      <div className=" flex-1 ">
        <div className="  max-w-[48rem] w-full   text-p-white flex gap-8 flex-col items-center md:text-left">
          <div className="mb-6 lg:mb-32  text-center lg:text-start">
            <h2 className="mid-font">
              Prizes and
              <span className="text-p-mix block">Rewards</span>
            </h2>
            <div className="max-w-[24rem] text-p-white">
              <p>
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
            </div>
          </div>
          <div className="lg:hidden mb-36">
            <Image
              width={600}
              height={500}
              src="/assets/svg/trophy.svg"
              alt="lady"
            />
          </div>
          <div className="mt-12 max-w-[43rem] mx-auto lg:mt-0 grid w-full grid-flow-col gap-4 md:gap-6">
            <div className=" relative max-w-[13.5rem] w-full  max-h-[19rem] h-fit px-2 md:px-4 pb-8 rounded-lg border-[1px] border-p-mix bg-r-primary ">
              <div className="h-16 sm:h-32 mb-4 grid">
                <div className="relative">
                  <div className="absolute -bottom-6 left-0 right-0 mx-auto max-w-[11rem]">
                    <Image
                      src="/assets/svg/silver-medal.svg"
                      className="w-full"
                      alt="silver"
                      width={300}
                      height={300}
                      layout="responsive"
                      objectFit="contain"
                    />
                  </div>
                </div>
                <div className=""></div>
              </div>
              <div className="text-center">
                <h3 className="text-p-white semi-mid-font">2nd</h3>
                <p className="half-mid-font text-p-white">Runner</p>
                <p className="text-p-mix text-sm font-bold sm:text-3xl">
                  N300,000
                </p>
              </div>
            </div>

            <div className="mt-8 w-full max-w-[13.5rem]  max-h-[19rem] h-fit px-2 md:px-4 pb-8 rounded-lg border-[1px] border-p-mix bg-r-primary ">
              <div className="h-16 sm:h-32 mb-4 grid">
                <div className="relative">
                  <div className="absolute left-0 right-0 sm:-left-[68px] -bottom-6 sm:w-[18rem] ">
                    <Image
                      src="/assets/image/gold-medal.png"
                      className="w-full"
                      width={500}
                      height={500}
                      alt="gold"
                    />
                  </div>
                </div>
                <div></div>
              </div>
              <div className="text-center">
                <h3 className="text-p-white semi-mid-font">2nd</h3>
                <p className="half-mid-font text-p-white">Runner</p>
                <p className="text-p-mix text-sm font-bold sm:text-3xl">
                  N300,000
                </p>
              </div>
            </div>

            <div className="  w-full max-w-[13.5rem]  max-h-[19rem] h-fit px-2 md:px-4 pb-8 rounded-lg border-[1px] border-p-mix bg-r-primary ">
              <div className="h-16 sm:h-32 mb-4 grid">
                <div className="relative">
                  <div className="absolute  -bottom-6 left-0 right-0 max-w-[11rem]">
                    <Image
                      src="/assets/svg/bronze-medal.svg"
                      className="w-full"
                      alt="bronze"
                      width={300}
                      height={300}
                      layout="responsive"
                      objectFit="contain"
                    />
                  </div>
                </div>
                <div></div>
              </div>
              <div className="text-center ">
                <h3 className="text-p-white semi-mid-font">2nd</h3>
                <p className="half-mid-font text-p-white">Runner</p>
                <p className="text-p-mix text-sm font-bold sm:text-3xl">
                  N300,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
