import type { NextPage } from "next";
import Footer from "../components/Footer";
import HomeCard from "../components/HomeCard";

import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <HomeCard />
      <Footer />
    </div>
  );
};

export default Home;
