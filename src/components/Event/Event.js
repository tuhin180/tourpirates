import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
// data load
const Event = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-green-500 text 4xl font-semibold">
        Enjoy Our <span className="text-rose-600">Hospitality</span>
      </h1>
      <div>
        <div className="event-container">
          {events.map((event) => (
            <Cart key={event.id} event={event}></Cart>
          ))}
        </div>
        <div className="cart-container"></div>
      </div>
    </div>
  );
};

export default Event;
