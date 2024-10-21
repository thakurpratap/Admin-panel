import React, { useState } from "react";
import DashboardBox from "./component/dashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { CiTimer } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import Team from "../../components/Table/team";


const options = [
  "Last Day",
  "Last Week",
  "Last Month",
  "Last Year",
]

function Dashboard() {

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
      <div className="right-content W-100">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox color={['#1da256', '#48d483']} icon = { <FaUserCircle />}/>
              <DashboardBox color={['#c012e2', '#eb64fe']} icon = { <IoCart />}/>
              <DashboardBox color={['#2c78e5', '#60aff5']} icon = { <MdShoppingBag />}/>
              <DashboardBox color={['#e1950e', '#f3cd29']} icon = { <GiStarsStack />}/>
            </div>
          </div>

          <div className="col-md-4 pl-0">
            <div className="box graphBox ">
 <div className="d-flex align-items-center">
       <h6 className="text-white mb-0 mt-0">Total Sales</h6>

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
            <CiTimer className=""/>{option}
          </MenuItem>
        ))}
      </Menu>
      </div>
       {/* <span className="ml-auto toggleicon"><PiChartLineDownBold/></span> */}
          </div>

<h3 className="text-white font-weight-bold">$3,787,681.00</h3>
<p className="text-white font-weight-bold">$3,578.90 in last month</p>
            </div>
          </div>

        </div>
        {/* <Team/> */}
<div className="card shadow border-0 p-3 mt-4">
<h3 className="hd">Best Selling Products</h3>
<Team/>
{/* <div className="row cardFilters">
  <div className="col">
<h4>SHOW BY</h4>
<Team/>
  </div>
</div> */}

</div>

      </div>
    </>
  );
}

export default Dashboard;
