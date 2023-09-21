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

const Home = () => {
  return (
    <div className="relative">
      <Heading
        title="Getlinked"
        description="Getlinked hackathon 1.0"
        keywords="Getlinked, hackathon,Tech,webdesign"
      />
      <Navbar />
      <Header />
      <div className="-z-30 absolute top-0">
        <img
          alt="purple background"
          src="/assets/image/purple-top-left.png"
          className="w-full min-w-[300px] opacity-70"
        />
      </div>

      <Introduction />
      <Guidelines />
      <Criteria />
      <FAQ />
      {/*
      <Timeline />
      <Rewards />
      <Sponsors />
      <Policy />
    */}
      <Footer />
    </div>
  );
};

export default Home;
