import Image from "next/image";
import React from "react";

const Sponsors = () => {
  return (
    <div className="padding-left padding-right padding-top">
      <div className="mb-16 text-center">
        <h2 className="mid-font text-p-white">Partners and Sponsors</h2>
        <div className="max-w-[28rem] mt-5 mx-auto">
          <p className="text-p-white text-sm">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
      </div>
      <div className="max-w-[78rem] mx-auto">
        <Image
          width={600}
          height={500}
          src="/assets/svg/partner-sponsors.svg"
          alt="partners"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Sponsors;
