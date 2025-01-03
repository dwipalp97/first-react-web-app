import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useConnectionStatus from "../utils/hooks/useConnectionStatus";
import UserContext from "../utils/context/UserContext";

const Header = () => {
  const onlineStatus = useConnectionStatus();
  const [btnLoginTxt,setBtnLoginTxt] = useState("Login");

  const {loggedInUser} = useContext(UserContext);
    return (
      <div className="flex justify-between bg-red-100 shadow-lg m-2">
        <div className="logo-container">
          <img
            className="w-36"
            src={LOGO_URL}
          />
        </div>
        <div className="flex items-center">
          <ul className="flex m-4 p-4"> 
            <li className="p-3">Online Status: {onlineStatus== true ? "✅" : "🛑"}</li>
            <li className="p-3"><Link to={'/'}>Home</Link></li>
            <li className="p-3"><Link to={'/about'}>About Us</Link></li>
            <li className="p-3"><Link to={'/contact'}>Contact Us</Link></li>
            <li className="p-3"><Link to={'/grocery'}>Grocery</Link></li>
            <li className="p-3">Cart</li>
            <button className="btn-login" onClick={()=>{setBtnLoginTxt(btnLoginTxt == "Login" ? "LogOut" : "Login")}}>{btnLoginTxt}</button>
            <li className="p-3" hidden={btnLoginTxt == "Login" }>{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };
  
export default Header;
  