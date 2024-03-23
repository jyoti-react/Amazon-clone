import React from "react";
import logo from "../images/logo.png";
import "../App.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header_main">
      <Link to='/'>
      <img className="logo_img" src={logo}></img>
      </Link>
      <div className="header__searchbar">
        <input className="header__searchinput" type="text"></input>
        <SearchIcon className="search_icon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello guest</span>
          <span className="header_optionLineTwo">Sign in</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
        <span className="header_optionLineOne">Your</span>
        <span className="header_optionLineTwo">Prime</span>
        </div>
        <div className="header_basketoption">
       <Link to='/basket'> <ShoppingBasketIcon className="basket_icon" /></Link>
        <span className="header_optionLineTwo header_basketcount">0</span>
        </div>
        
      </div>
    </div>
  );
}

export default Header;
