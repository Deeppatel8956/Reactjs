import React, { useState } from 'react';
import logo from '../logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import '../style/Header.css'
function Header(props) {
    const[searquery,setSearchquery]=useState('')
    return (
        <>
         <div className="header">
            <div className="header-left">
              <MenuIcon/>
              <img src={logo} className='header-log' alt="does not show" />
            </div>
            <div className="searchinput">
                <input type="text" placeholder='search' value={searquery} onChange={(e)=>setSearchquery(e.target.value)}/>
                <SearchIcon className='searchicon-header'/>
            </div>
            <div className="header-icons">
                <VideoCallIcon className='header-icon'/>
               <NotificationsIcon className='header-icon'/>
               <AccountCircleIcon className='header-icon'/>
            </div>
         </div>
        </>
    );
}

export default Header;