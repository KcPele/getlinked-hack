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
    <div>
      <Heading
        title="Getlinked"
        description="Getlinked hackathon 1.0"
        keywords="Getlinked, hackathon,Tech,webdesign"
      />
      <Navbar />
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
