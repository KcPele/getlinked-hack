import React from "react";
import { Heading } from "./utils";
import {
  Criteria,
  FAQ,
  Footer,
  Guidelines,
  Header,
  Introduction,
  Navbar,
  Policy,
  Rewards,
  Sponsors,
  Timeline,
} from "./components";
import Image from "next/image";

const Home = () => {
  return (
    <div className="relative overflow-x-clip">
      <Heading
        title="Getlinked"
        description="Getlinked hackathon 1.0"
        keywords="Getlinked, hackathon,Tech,webdesign"
      />
      <Navbar />
      <div className=" absolute mix-blend-hard-light  -z-30 max-w-[64rem] -top-10 md:-top-[150px] w-full">
        <Image
          alt=""
          src="/assets/image/contact-left-purple.png"
          layout="responsive"
          width={1000}
          height={1000}
          objectFit="cover"
          className="-z-30 w-full"
        />
      </div>
      <Header />

      <Introduction />

      <Guidelines />

      <Criteria />
      <FAQ />
      <Timeline />
      <Rewards />
      <Sponsors />

      <Policy />

      <Footer />
    </div>
  );
};

export default Home;
