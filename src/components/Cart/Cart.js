import React from "react";

const Cart = (props) => {
  const { Cost, description, img, title, duration } = props.event;
  return (
    <div className="p-2 border rounded-md border-gray-500 ">
      <img className="rounded-md" src={img} alt="" />
      <h1 className="text-xl font-semibold text-left">
        Location: <span className="text-green-500"> {title}</span>
      </h1>

      <p className="text-left">
        Duration:
        <span className="text-green-500"> {duration} Days</span>
      </p>
      <p className="text-left">
        Total Cost:
        <span className="text-green-500"> {Cost}</span>
      </p>
      <p className="text-left">{description}</p>
      <button className="btn btn-secondary w-full text-white ">
        Add to List
      </button>
    </div>
  );
};

export default Cart;
