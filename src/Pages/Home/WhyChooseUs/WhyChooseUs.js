import React from "react";
import "./WhyChooseUs.css";
import service1 from "../../../images/adult-blur-blurred-background-687824.png";
import service2 from "../../../images/chef-cook-food-33614.png";
import service3 from "../../../images/architecture-building-city-2047397.png";

const WhyChooseUs = () => {
  return (
    <div className="container">
      <hr />
      <div>
        <h1>Why choose us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, hic!
        </p>
      </div>
      <div className="service-container">
        <div>
          <img className="img-fluid" src={service1} alt="" />
        </div>
        <div>
          <img className="img-fluid" src={service2} alt="" />
        </div>
        <div>
          {" "}
          <img className="img-fluid" src={service3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
