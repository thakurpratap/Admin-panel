import React from "react";
import Button from "@mui/material/Button";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa6";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { IoLogInSharp } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { Link } from "react-router-dom";

function Sidebar() {
const isOpensubmenu = () => {

}

  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
          <Link to="/">
            <Button className="w-100">
              <span className="icon"><LuLayoutDashboard/></span>
              Dashboard
              <span className="arrow"><FaAngleRight/></span>
            </Button>
            </Link>
          </li>

          <li>
          <Link to="/team">
            <Button className="w-100" onClick={()=> isOpensubmenu}>
              <span className="icon"><FaProductHunt/></span>
              manage Team
              <span className="arrow"><FaAngleRight/></span>
            </Button>
            {/* <div className="submenuWrapper">
           <ul className="submenu">
            <li><Link to='#'>Product list</Link></li>
            <li><Link to='#'>Product view </Link></li>
            <li><Link to='#'>Product Upload</Link></li>
           </ul>
           </div> */}
           </Link>
          </li>
    
          <li>
          <Link to="/contacts">
            <Button className="w-100">
              <span className="icon"><RiShoppingCart2Fill/></span>
              Information
              <span className="arrow"><FaAngleRight/></span>
            </Button>
            </Link>
          </li>

          <li>
          <Link to="/invoice">
            <Button className="w-100">
              <span className="icon"><MdMessage/></span>
             Invoice Balance
              <span className="arrow"><FaAngleRight/></span>
            </Button>
            </Link>
          </li>

          <li>
          <Link to="/form">
            <Button className="w-100">
              <span className="icon"><IoIosNotifications/></span>
             Profile Form
              <span className="arrow"><FaAngleRight/></span>
            </Button>
            </Link>
          </li>

          <li>
          <Link to="/calender">
            <Button className="w-100">
              <span className="icon"><IoIosSettings/></span>
             calender
              <span className="arrow"><FaAngleRight/></span>
            </Button>
            </Link>
          </li>

          <li>
          <Link to="/">
            <Button className="w-100">
              <span className="icon"><IoLogInSharp/></span>
             FAQ page
              <span className="arrow"><FaAngleRight/></span>
            </Button>
            </Link>
          </li>

          {/* <li>
          <Link to="/">
            <Button className="w-100">
              <span className="icon"><LuLayoutDashboard/></span>
             Signup
              <span className="arrow"><FaAngleRight/></span>
            </Button>
            </Link>
          </li> */}
          {/* <li>
            <Button className="w-100">
              <span className="icon"><LuLayoutDashboard/></span>
             Orders
              <span className="arrow"><FaAngleRight/></span>
            </Button>
          </li>
          <li>
            <Button className="w-100">
              <span className="icon"><LuLayoutDashboard/></span>
             Messages
              <span className="arrow"><FaAngleRight/></span>
            </Button>
          </li>
          <li>
            <Button className="w-100">
              <span className="icon"><LuLayoutDashboard/></span>
             Notifiations
              <span className="arrow"><FaAngleRight/></span>
            </Button>
          </li>
          <li>
            <Button className="w-100">
              <span className="icon"><LuLayoutDashboard/></span>
             Settings
              <span className="arrow"><FaAngleRight/></span>
            </Button>
          </li> */}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
