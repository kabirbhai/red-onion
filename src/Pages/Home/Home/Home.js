import React from "react";
import Banner from "../Banner/Banner";
import Lunch from "../Lunch/Lunch";
import Breakfast from "../Breakfast/Breakfast";
import Dinner from "../Dinner/Dinner";
import HomeHeader from "../HomeHeader/HomeHeader";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container">
        <HomeHeader />
        <Breakfast />
        <Lunch />
        <Dinner />
        <WhyChooseUs />
      </div>
    </div>
  );
};

export default Home;
