import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// SIGUP PAGE MARKUP

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "noahtask" && password === "jece1111") {
      navigate("/register/name");
      toast.success("Hurray! Login Successfull");
    } else toast.warn("Incorrect Username or Password, Please Check");
  };

  return (
    <>
      {/* REACT HELMET IS USED FOR SEO TRACKING */}
      <Helmet>
        <title>Signup - Jece Task</title>
        <meta name="description" content="Jece Task signup page" />
        <link rel="canonical" href="/signup" />
      </Helmet>

      {/* MARKUP */}
      <div className="signup-div">
        <form onSubmit={handleLogin}>
          <h3>Login To Begin</h3>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
