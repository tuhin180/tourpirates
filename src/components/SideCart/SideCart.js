import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import profile from "../../Utilities/images/Tuhin.jpg";
const SideCart = () => {
  return (
    <div className="bg-red-200 rounded sticky top-0 p-2">
      <div className=" md:flex md:gap-2 justify-center text-center items-center">
        <img className="w-10 rounded-badge  " src={profile} alt="" />
        <h1 className="text-white">MD.Tuhin Hossain</h1>
        <p className="text-left">
          <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon>
          <span className="text-white">Barishal</span>
        </p>
      </div>
      <div className="bg-white">
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default SideCart;
