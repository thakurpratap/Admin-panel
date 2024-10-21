import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import SearchBox from "../SearchBox";
import profile from '../../assest/images/profile.png'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  

  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            {/* logo wrap */}
            <div className="col-sm-2 part-1">
              <Link to="/" className="d-flex align-items-center logo">
                {" "}
                {/* Correct className */}
                <img src="" alt="" />
                <span className="ml-2">HOTASH</span>
              </Link>
            </div>
            <div className="col-sm-3 d-flex align-items-center part-2 pl-4">
              <Button className="rounded-circle mr-3" variant="contained"><MdOutlineMenuOpen /></Button>
              <SearchBox/>
            </div>

            <div className="col-sm-7 d-flex align-items-center justify-content-end part-3 pl-4">
              <Button className="rounded-circle mr-3" variant="contained"><CiLight className="icon-large" /></Button>
              <Button className="rounded-circle mr-3" variant="contained"><FaCartShopping className="icon-large" /></Button>
              {/* <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu> */}
              {/* <Button className="rounded-circle mr-3" variant="contained"><FaCartShopping className="icon-large"/></Button> */}
              <Button className="rounded-circle mr-3" variant="contained"><MdEmail className="icon-large" /></Button>
              <Button className="rounded-circle mr-3" variant="contained"><FaBell className="icon-large"/></Button>

<div className="myAccWrapper">
<Button className="myAcc d-flex align-items-center" onClick={handleClick}>
                  <div className="userImg"> 
                  <span className="rounded-circle">
                    <img src={profile} alt="img"/>
                  </span>
                  </div>

<div className="userInfo">
<h4>Pratap singh</h4>
<p className="mb-0">@pratap888</p>
</div>

              </Button>
              <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          My Account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Reset Password
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
</div>
           
            </div>

          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
