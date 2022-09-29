import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import SideCart from "../SideCart/SideCart";

// data load
const Event = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="m-4">
      <h1 className="text-center text-green-500 text 4xl font-semibold">
        Enjoy Our <span className="text-rose-600">Hospitality</span>
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-4  m-3 gap-4">
        <div className="col-span-2 md:col-span-3 event-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            {events.map((event) => (
              <Cart key={event.id} event={event}></Cart>
            ))}
          </div>
        </div>
        <div className="cart-container">
          <SideCart></SideCart>
        </div>
      </div>
    </div>
  );
};

export default Event;
