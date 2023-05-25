import React from "react";
import { useRegisterContext } from "../../ContextManager/RegisterContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Number = () => {
  const { number, handleSetUser } = useRegisterContext(); //NUMBER AND HANDLEUSER STATE IMPORTED FROM USECONTEXT STATE MANAGER
  const navigate = useNavigate();
  const handleNext = (e) => {
    e.preventDefault();
    if (number.length > 0) {
      navigate("/register/address");
    } else toast.warn("Please add number");
  }; 
  
  const handlePrev = (e) => {
    e.preventDefault();
      navigate("/register/city");
  }
  // LOGIC TO SEND USER TO THE ADDRESS INPUT WHEN "NEXT STEP BUTTON" IS PRESSED AFTER FILLING THE NUMBER INPUT
  return (
    <div className="inputReg-container">
      <div>
        <div className="text-session">
          <p>Step 3/5</p>
          <h2>What's your mobile number?</h2>
          <span>Please fill in the details below</span>
        </div>

        <div className="input-session">
          <p>Enter your number</p>
          <input
            type="number"
            name="number"
            id="number"
            placeholder="+123-000-000-000"
            value={number}
            onChange={handleSetUser}
          />
          <button
            id={number.length === 0 && "disabled"}
            className="button"
            onClick={handleNext}
          >
            NEXT STEP
          </button>

          <button
         
         className="prev "
         onClick={handlePrev}
          >
         PREVIOUS STEP  
          </button>
        </div>
      </div>
    </div>
  );
};

export default Number;
