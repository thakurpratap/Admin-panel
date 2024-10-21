import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiChartLineDownBold } from "react-icons/pi";

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CiTimer } from "react-icons/ci";

const options = [
  "Last Day",
  "Last Week",
  "Last Month",
  "Last Year",
]

function DashboardBox(props) {

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
      <div
        className="dashboardBox"
        style={{
          background: `linear-gradient(to right, ${props.color[0]},${props.color[1]})`,
        }}
      >
        <div className="d-flex w-100">
          <div className="col1">
            <h4 className="text-white"> Total Users</h4>
            <span className="text-white">277</span>
          </div>
          <div className="ml-auto">
            <span className="icon">
            {props.icon}
            </span>
          </div>
        </div>

        <div className="d-flex align-items-center">
       <h6 className="text-white mb-0 mt-0">Last Month</h6>

       <div className="ml-auto">
       <span className="ml-auto toggleicon" onClick={handleClick}><BsThreeDotsVertical/></span>
       <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            <CiTimer className="gap-2"/>{option}
          </MenuItem>
        ))}
      </Menu>
      </div>
       {/* <span className="ml-auto toggleicon"><PiChartLineDownBold/></span> */}
          </div>
      </div>
    </>
  );
}

export default DashboardBox;
