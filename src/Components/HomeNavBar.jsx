import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRegisterContext } from "../ContextManager/RegisterContext";

const HomeNavBar = () => {
  const navigate = useNavigate();
  const { handleLogout } = useRegisterContext(); //LOGOUT LOGIC IMPORTED FROM USECONTEXT STATE MANAGER

  return (
    <div>
      <div className="App-container">
        <nav>
          <img
            src="https://jeceoverseasstudies.com/wp-content/uploads/2020/09/JML.png"
            alt="logo"
            onClick={(e) => navigate("/")}
            className="logo"
          />
          <ul className="nav-flex">
            <Link to="/" className="li">
              Home
            </Link>
            <Link to="/register/name" className="li" onClick={handleLogout}>
              Logout
            </Link><Link to="/" className="li" >
              Profile
            </Link><Link to="/" className="li" >
              Admin
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HomeNavBar;
