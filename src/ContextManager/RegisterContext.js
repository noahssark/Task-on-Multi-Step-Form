import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterDataSource = () => {
  // INITIAL STATE OF A NEW USER BEFORE LOGGING IN
  const newUser = {
    name: "",
    city: "",
    country: "",
    number: "",
    address: "",
  };

  const [user, setUser] = useState(newUser); //LOGIC TO ASSIGN USER DETAILS AROUND THE WEB.
  const [auth, setAuth] = useState(false); // LOGIC TO CHECK IF USER IS AUTHENTICATED OR NOT.
  const navigate = useNavigate();
  const { name, address, city, country, number } = user;

  const handleSetUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }; //LOGIC TO SAVE THE USER'S INPUTS INTO THE NEW USER VARIABLE

  const handleSignup = (e) => {
    e.preventDefault();
    if (name && address && city && country && number) {
      toast.success("Sign Up Successfull");
      setAuth(true);
      navigate("/welcome");
    } else {
      toast.error("Please fill all input fields");
    }
  }; //LOGIC TO FINALY ALLOW A USER TO SIGN UP SUCCESSFULLY

  const handleLogout = (e) => {
    e.preventDefault();

    setUser(newUser);
    setAuth(false);
    navigate("/register/name");
    window.location.reload();
    toast.success("You are Logged Out now");
  }; //LOGIC TO LOG AN ALREADY SIGNED IN USER OUT OF THE WEBSITE

  return {
    name,
    address,
    city,
    country,
    number,
    auth,
    handleLogout,
    handleSetUser,
    handleSignup,
  }; //LOGICS AND VARIABLES EXPORTED TO BE USED ANYWHERE IN THE CODE BASE
};

//REACT USECONTEXT STATE MANAGER TO HELP USE OUR LOGICS AROUND OUR CODE BASE
const RegisterContext = createContext([]);

export function useRegisterContext() {
  return useContext(RegisterContext);
}

export const UseRegister = ({ children }) => {
  return (
    <RegisterContext.Provider value={RegisterDataSource()}>
      {children}
    </RegisterContext.Provider>
  );
};
