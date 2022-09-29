import React from "react";
import logo from "../../Utilities/images/tourpirates.png";

const Nav = () => {
  return (
    <nav>
      <div className="navbar bg-green-500">
        <div className="flex-1">
          <img className="w-12" src={logo} alt="" />
          <a className="btn btn-ghost normal-case text-2xl text-white">
            Tour Pirates
          </a>
        </div>
        <div className="flex-none text-white text-2xl">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>Event</a>
            </li>

            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
