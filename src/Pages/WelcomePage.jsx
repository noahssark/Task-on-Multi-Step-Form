import React, { useEffect } from "react";
import { useRegisterContext } from "../ContextManager/RegisterContext";
import { ImWink2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const WelcomePage = () => {
  const { name, auth } = useRegisterContext(); //AUTH AND NAME STATE IMPORTED FROM USECONTEXT STATE MANAGER
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/register/name");
    }
  },[]); //LOGIC TO REDIRECT UNAUTHENTICATED USERS BACK TO THE REGISTRATION PAGE

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigate]); // LOGIC TO REDIRECT AUTHENTICATED USERS TO THE HOME PAGE AFTER 3-SECONDS OF DISPLAYING WELCOME MESSAGE
  return (
    <>
    {/* REACT HELMET IS USED TO TRACK SEO */}
      <Helmet>
        <title>Register - Jece Overseas Studies</title>
        <meta
          name="description"
          content="Welcome to Jece Overseas Studies, Welcome Page"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="welcome-container">
        <div>
          <h1>
            Congratulations {name} <ImWink2 />
          </h1>
          <h2>Welcome To Jece Overseas Studies</h2>
          <p>You'll be re-directed to the home page soon</p>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
