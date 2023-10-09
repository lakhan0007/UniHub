import React, { useNavigate } from "react";
import "./NavBar.css";
import NavLogo from "../../../public/Images/NavBarLogo.png";
import Whatsapp from "../../../public/Images/WhatsApp.png";
import messanger from "../../../public/Images/Facebook Messenger.png";
import trending from "../../../public/Images/Rectangle 10.png";
import SearchIcon from "@mui/icons-material/Search";
import DropdownBtn from "../DropDownButton/DropDownButton";
import { NavLink } from "react-router-dom";
import SignUp from "../SignUp/sing-up";
import Login from "./../login/login";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="topNav">
          <div className="navLogo">
            <NavLink to="/">
              <img src={NavLogo} />
            </NavLink>
          </div>
          <div className="navsearch">
            <div className="navText"></div>

            <input
              type="text"
              className="navIn"
              placeholder="Seacrh University"
            />
            <SearchIcon className="searchIcon" />
          </div>
          <div className="navIcons">
            <NavLink to={"/Login"} className="login-button">
              Login /{" "}
            </NavLink>
            <NavLink to={"/SignUp"} className="login-button">
              Sing Up
            </NavLink>
            {/* <img src={Whatsapp} alt="" /> */}
            {/* <img src={messanger} alt="" /> */}
          </div>
        </div>

        <div className="navButtons1">
          <div className="haburgerDiv">
            <MenuIcon />
          </div>
            <DropdownBtn name={"Collage"}/>
            <DropdownBtn name={"Stream"} />
            <DropdownBtn name={"Services"}/>
            <DropdownBtn name={"Blog"}/>
            <DropdownBtn name={"Products"}/>
            <DropdownBtn name={"Contact"}/>
            <DropdownBtn name={"Counselling"}/>
        </div>

      </div>
    </>
  );
}

export default Navbar;
