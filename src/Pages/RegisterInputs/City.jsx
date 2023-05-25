import React from "react";
import { useRegisterContext } from "../../ContextManager/RegisterContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const City = () => {
  const { city, handleSetUser } = useRegisterContext(); //CITY AND HANDLEUSER STATE IMPORTED FROM USECONTEXT STATE MANAGER
  const navigate = useNavigate();
  const handleNext = (e) => {
    e.preventDefault();
    if (city.length > 0) {
      navigate("/register/number");
    } else toast.warn("Please add city");
  }; 
  
  const handlePrev = (e) => {
    e.preventDefault();
      navigate("/register/name");
  }; 
  // LOGIC TO SEND USER TO THE NUMBER INPUT WHEN "NEXT STEP BUTTON" IS PRESSED AFTER FILLING THE CITY INPUT
  return (
    <div className="inputReg-container">
      <div>
        <div className="text-session">
          <p>Step 2/5</p>
          <h2>Let's know your city</h2>
          <span>Please fill in the details below</span>
        </div>

        <div className="input-session">
          <p>Enter your city</p>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="e.g London"
            value={city}
            onChange={handleSetUser}
          />
          <button
         className="prev "
         onClick={handlePrev}
          >
         PREVIOUS STEP  
          </button>

          <button
            id={city.length === 0 && "disabled"}
            className="button"
            onClick={handleNext}
          >
            NEXT STEP
          </button>
        </div>
      </div>
    </div>
  );
};

export default City;
