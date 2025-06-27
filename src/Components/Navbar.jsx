import React from "react";
import image from "../Images/logo.png";

const Navbar = () => {
  return (
    <div className=" flex items-center  justify-between mx-20 justify-contant:space-between
   cursor-pointer">
      <div>
        <div>
          {" "}
          <img src={image} alt="" className="w-44" />
        </div>
      </div>
      <div>
        <div> 
<button className="text-white font-bold p-1 px-4 bg-[red] rounded "> Sign In </button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
