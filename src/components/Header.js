import React from "react";
import { Logo } from "../utils/config";

const Header = () => {
  return (
    <div className="absolute z-10 ">
      <img className="w-64 pl-10 pt-5" src={Logo} />
    </div>
  );
};

export default Header;
