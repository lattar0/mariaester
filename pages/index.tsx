import type { NextPage } from "next";
import ClassRoom from "../components/ClassRoom";
import HomeCard from "../components/HomeCard";

import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <HomeCard />
    </div>
  );
};

export default Home;
