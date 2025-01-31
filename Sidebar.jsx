import React from 'react';
import SidebarItem from './SidebarItem';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import RestoreIcon from '@mui/icons-material/Restore';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../style/Sidebar.css'
import { useLocation } from 'react-router-dom';
function Sidebar(props) {
    const location=useLocation()
    const cuurrentpath=location.pathname
    return (
        <div className='sidebar'>
            <SidebarItem selected={cuurrentpath=='/'} Icon={HomeIcon} title='Home' path={'/'}/>
            <SidebarItem selected={cuurrentpath=='/trending'} Icon={WhatshotIcon} title='Trending' path={'/trending'}/>
            <SidebarItem selected={cuurrentpath=='/subscription'} Icon={SubscriptionsIcon} title='Subscription' path={'/subscription'}/>
            <hr />
            <SidebarItem selected={cuurrentpath=='/libary'} Icon={VideoLibraryIcon} title='libary' path={'/libary'}/>
            <SidebarItem selected={cuurrentpath=='/history'} Icon={RestoreIcon} title='history' path={'/history'}/>
            <SidebarItem selected={cuurrentpath=='/Yourvideos'} Icon={OndemandVideoIcon} title='Yourvideos' path={'/Yourvideos'}/>
            <SidebarItem selected={cuurrentpath=='/Watchletter'} Icon={WatchLaterIcon} title='Watchletter' path={'/Watchletter'}/>
            <SidebarItem selected={cuurrentpath=='/Likes'} Icon={ThumbUpIcon} title='Likes' path={'/Likes'}/>
            <SidebarItem selected={cuurrentpath=='/showmore'} Icon={ExpandMoreIcon} title='Showmore' path={'/showmore'}/>
        </div>
    );
}

export default Sidebar;