import React from "react";

const Footer = () => {
  const today = new Date().getFullYear();
  return (
    <div className="p-4 bg-primary">
      <p>Copyright {today} </p>
    </div>
  );
};

export default Footer;
