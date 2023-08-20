import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [logged, setLogged] = useState(false);
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between">
      <div className="w-36">
        <img alt="LOGO" className="logo" src={LOGO_URL} />
      </div>
      <div className="flex">
        <ul className="flex p-4  items-center ">
          <li className="flex p-4  items-center ">
            {onlineStatus === true ? "Online" : "Offline"}
          </li>
          <Link className="nav-items-link" to="/">
            {" "}
            <li className=" p-4  items-center">Home</li>
          </Link>
          <Link to="/about" className="nav-items-link">
            {" "}
            <li className=" p-4  items-center ">About Us</li>
          </Link>
          <Link to="/contact" className="nav-items-link">
            {" "}
            <li className=" p-4  items-center ">Contact Us</li>
          </Link>
          <li className=" p-4  items-center ">Cart</li>
          <button className="login-btn" onClick={() => setLogged(!logged)}>
            {logged ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
