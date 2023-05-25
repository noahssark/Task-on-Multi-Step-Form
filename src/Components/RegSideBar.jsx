import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiPhoneCall } from "react-icons/bi";
import { GiWorld } from "react-icons/gi";
import { TiHomeOutline } from "react-icons/ti";

const RegSideBar = () => {
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/register");
  return (
    <div>
      <Link
        to="/register/name"
        className="sidebar-link"
        id={splitLocation[1] === "/name" ? "active" : ""}
      >
        <div className="dot top-dot">◉</div>
        <BsPerson className="sidebar-icon person-icon" />
        <div>
          <h4>Your Name</h4>
        </div>
      </Link>
      <div className="vl"></div>
      <Link
        to="/register/city"
        className="sidebar-link"
        id={splitLocation[1] === "/city" ? "active" : ""}
      >
        <div className="dot">◉</div>
        <SlLocationPin className="sidebar-icon" />
        <div>
          <h4>City Location</h4>
        </div>
      </Link>

      <Link
        to="/register/number"
        className="sidebar-link"
        id={splitLocation[1] === "/number" ? "active" : ""}
      >
        <div className="dot">◉</div>
        <BiPhoneCall className="sidebar-icon" />
        <div>
          <h4>Telephone Number</h4>
        </div>
      </Link>

      <Link
        to="/register/address"
        className="sidebar-link"
        id={splitLocation[1] === "/address" ? "active" : ""}
      >
        <div className="dot">◉</div>
        <TiHomeOutline className="sidebar-icon" />
        <div>
          <h4>House Address</h4>
        </div>
      </Link>

      <Link
        to="/register/country"
        className="sidebar-link"
        id={splitLocation[1] === "/country" ? "active" : ""}
      >
        <div className="dot">◉</div>
        <GiWorld className="sidebar-icon" />
        <div>
          <h4>Country Of Residence</h4>
        </div>
      </Link>
    </div>
  );
};

export default RegSideBar;
