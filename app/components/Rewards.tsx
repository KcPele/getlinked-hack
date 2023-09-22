import Image from "next/image";
import React from "react";

const Rewards = () => {
  return (
    <div className=" flex-1 pb-32 padding-left padding-right  mt-[3.8rem] flex flex-col justify-center lg:flex-row gap-4">
      <div>
        <div>
          <Image
            width={600}
            height={500}
            src="/assets/svg/trophy.svg"
            alt="lady"
          />
        </div>
      </div>
      <div className=" flex-1 text-p-white flex gap-8 flex-col items-center md:text-left">
        <div className="mb-14  text-center md:text-start">
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
        <div className="grid  grid-flow-col gap-6">
          <div className=" relative max-w-[13.5rem] min-h-[7rem] max-h-[19rem] h-full px-4 pb-8 rounded-lg border-[1px] border-p-mix bg-r-primary ">
            <div className="absolute -top-20 max-w-[11rem]">
              <Image
                src="/assets/svg/silver-medal.svg"
                className="w-full"
                alt="silver"
                width={300}
                height={300}
              />
            </div>
            <div className="h-32"></div>
            <div className="text-center">
              <h3 className="text-p-white semi-mid-font">2nd</h3>
              <p className="half-mid-font text-p-white">Runner</p>
              <p className="text-p-mix mid-font">N300,000</p>
            </div>
          </div>
          <div className=" relative max-w-[13.5rem] min-h-[7rem] max-h-[19rem] h-full px-4 pb-8 rounded-lg border-[1px] border-p-mix bg-r-primary ">
            <div className="absolute -top-20 max-w-[18rem]">
              <Image
                src="/assets/svg/gold-medal.svg"
                className="w-full"
                alt="gold"
                width={300}
                height={200}
              />
            </div>
            <div className="h-32"></div>
            <div className="text-center">
              <h3 className="text-p-white semi-mid-font">2nd</h3>
              <p className="half-mid-font text-p-white">Runner</p>
              <p className="text-p-mix mid-font">N300,000</p>
            </div>
          </div>
          <div className=" relative max-w-[13.5rem] min-h-[7rem] max-h-[19rem] h-full px-4 pb-8 rounded-lg border-[1px] border-p-mix bg-r-primary ">
            <div className="absolute -top-20 max-w-[11rem]">
              <Image
                src="/assets/svg/bronze-medal.svg"
                className="w-full"
                alt="bronze"
                width={300}
                height={300}
              />
            </div>
            <div className="h-32"></div>
            <div className="text-center">
              <h3 className="text-p-white semi-mid-font">2nd</h3>
              <p className="half-mid-font text-p-white">Runner</p>
              <p className="text-p-mix mid-font">N300,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
