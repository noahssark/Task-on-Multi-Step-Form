import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterPage from "./Pages/RegisterPage";
import WelcomePage from "./Pages/WelcomePage";
import Name from "./Pages/RegisterInputs/Name";
import Address from "./Pages/RegisterInputs/Address";
import City from "./Pages/RegisterInputs/City";
import Number from "./Pages/RegisterInputs/Number";
import Country from "./Pages/RegisterInputs/Country";
import {
  UseRegister,
  useRegisterContext,
} from "./ContextManager/RegisterContext";
import HomePage from "./Pages/HomePage";
import { useEffect } from "react";
import SignUp from "./Pages/Signup";

function App() {
  const { auth } = useRegisterContext(); //AUTH STATE IMPORTED FROM USECONTEXT STATE MANAGER
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/signup");
    }
  }, []); // LOGIC TO REDIRECT UNAUTHENTICATED USER'S BACK TO THE REGISTERATION PAGE

  return (
    <div className="App">
      <UseRegister>
        <main className="App-main">
          <ToastContainer
            position="top-center"
            limit={1}
            theme="dark"
            transition={Zoom}
            hideProgressBar={true}
          />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />}>
              <Route path="name" element={<Name />} />
              <Route path="address" element={<Address />} />
              <Route path="city" element={<City />} />
              <Route path="number" element={<Number />} />
              <Route path="country" element={<Country />} />
            </Route>
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
      </UseRegister>
    </div>
  );
}

export default App;
