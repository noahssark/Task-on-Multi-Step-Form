import React, { useState } from "react";
import RegSideBar from "../Components/RegSideBar";
import { Outlet } from "react-router-dom";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const RegisterPage = () => {
  const [darkMood, setDarkMood] = useState(true); //LOGIC TO TOOGLE LIGHT AND DARK MODE IN THE APP
  return (
    <>
      {/* REACT HELMET IS USED FOR SEO TRACKING */}
      <Helmet>
        <title>Register - Jece Overseas Studies</title>
        <meta
          name="description"
          content="Welcome to Jece Overseas Studies, Register into JECE"
        />
        <link rel="canonical" href="/register" />
      </Helmet>
      <div
        className={`${
          !darkMood ? "register-container dark" : "register-container light"
        }`}
      >
        <div className="skill-level">
          <div>
            <h2>My Skill Level</h2>
            <p>Answer the following questions to begin your plan</p>
          </div>
          <div className="mode-btn">
            {!darkMood ? (
              <MdNightlight onClick={() => setDarkMood(!darkMood)} />
            ) : (
              <MdLightMode onClick={() => setDarkMood(!darkMood)} />
            )}
          </div>
        </div>
        <div className="register-flex">
          <div className="regsidebar-div">
            <RegSideBar />
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
