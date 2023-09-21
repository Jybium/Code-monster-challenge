import React from "react";
import Mobile from "../assets/mobile.png";
import Desktop from "../assets/desktop.png";

const SideImage = () => {
  return (
    <div className="w-full">
      <img src={Desktop} alt="" className="sm:block hidden w-[95%]" />
      <img src={Mobile} alt="" className="sm:hidden" />
    </div>
  );
};

export default SideImage;
