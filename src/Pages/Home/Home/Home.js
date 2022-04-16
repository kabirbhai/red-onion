import React from "react";
import Banner from "../Banner/Banner";
import Lunch from "../Lunch/Lunch";
import Breakfast from "../Breakfast/Breakfast";
import Dinner from "../Dinner/Dinner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Breakfast />
      <Lunch />
      <Dinner />
    </div>
  );
};

export default Home;
