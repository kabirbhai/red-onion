import React from "react";

const Footer = () => {
  const today = new Date().getFullYear();
  return (
    <div>
      <p>Copyright {today} </p>
    </div>
  );
};

export default Footer;
