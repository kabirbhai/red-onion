import React from "react";
import useData from "../../../hooks/useData";
import Banner from "../Banner/Banner";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Breakfast from "../Breakfast/Breakfast";
import "./Home.css";

const Home = () => {
  const [foods] = useData();

  return (
    <div>
      <Banner />
      <div className="container food-container">
        {foods.map((food) => (
          <Breakfast food={food}></Breakfast>
        ))}
      </div>
      <WhyChooseUs />
    </div>
  );
};

export default Home;
