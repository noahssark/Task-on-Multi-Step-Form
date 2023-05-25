import React from "react";
import { useRegisterContext } from "../../ContextManager/RegisterContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Name = () => {
  const { name, handleSetUser } = useRegisterContext(); //NAME AND HANDLEUSER STATE IMPORTED FROM USECONTEXT STATE MANAGER
  const navigate = useNavigate();
  const handleNext = (e) => {
    e.preventDefault();
    if (name.length > 0) {
      navigate("/register/city");
    } else toast.warn("Please add name");
  }; // LOGIC TO SEND USER TO THE CITY INPUT WHEN "NEXT STEP BUTTON" IS PRESSED AFTER FILLING THE NAME INPUT

  return (
    <div className="inputReg-container">
      <div>
        <div className="text-session">
          <p>Step 1/5</p>
          <h2>Let's start with your name</h2>
          <span>Please fill in the details below</span>
        </div>

        <div className="input-session">
          <p>Enter your name</p>
          <input
            type="text"
            value={name}
            name="name"
            placeholder="e.g momuud kasim"
            onChange={handleSetUser}
          />
          <button
            id={name.length === 0 && "disabled"}
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

export default Name;
