import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import profile from "../../Utilities/images/Tuhin.jpg";

// calculating Cost
const SideCart = ({ cart }) => {
  let total = 0;
  for (const item of cart) {
    total = item.Cost;
  }

  // button data
  const [time, setTime] = useState([]);
  const buttonText = (props) => {
    setTime(props);
    localStorage.setItem("rest-time", props);
  };
  useEffect(() => {
    const getStoredItem = localStorage.getItem("rest-time");
    setTime(getStoredItem);
  }, []);
  return (
    <div className="bg-green-400 rounded sticky top-0 p-2 ">
      <div className=" md:flex md:gap-2 justify-center text-center items-center">
        <img className="w-10 rounded-badge  " src={profile} alt="" />
        <h1 className="text-white">MD.Tuhin Hossain</h1>
        <p className="text-left">
          <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon>
          <span className="text-white">Barishal</span>
        </p>
      </div>
      <div className="bg-white flex flex-row gap-2 m-1 justify-around text-sm rounded md:gap-4 md:justify-around ">
        <div>
          <h1>59Kg</h1>
          <p>weight</p>
        </div>
        <div>
          <h1>170c</h1>
          <p>Height</p>
        </div>
        <div>
          <h1>23Y</h1>
          <p>Age</p>
        </div>
      </div>
      <div>
        <h1 className="text-left text-white m-1">Add Rest Time</h1>
        <div className="">
          <button
            onClick={(e) => buttonText(e.target.innerText)}
            className=" m-1 btn btn-circle btn-outline bg-white"
          >
            2d
          </button>
          <button
            onClick={(e) => buttonText(e.target.innerText)}
            className=" m-1 btn btn-circle btn-outline bg-white"
          >
            5d
          </button>
          <button
            onClick={(e) => buttonText(e.target.innerText)}
            className=" m-1 btn btn-circle btn-outline bg-white"
          >
            10d
          </button>
          <button
            onClick={(e) => buttonText(e.target.innerText)}
            className=" m-1 btn btn-circle btn-outline bg-white"
          >
            15d
          </button>
        </div>
        <div className=" m-1 text-white text-left">
          <h1>Total schedule</h1>
          <p className=" m-1 bg-white text-black rounded p-2">
            Total Cost {total}
          </p>
          <p className=" m-1 bg-white text-black rounded p-2" id="rest">
            RestTime {time}
          </p>
          <button className="btn btn-waarning w-full">Complete</button>
        </div>
      </div>
    </div>
  );
};

export default SideCart;
