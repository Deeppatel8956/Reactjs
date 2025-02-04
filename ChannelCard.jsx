import React from 'react'
import  Avatar  from '@mui/material/Avatar'
import CheckIcon from '@mui/icons-material/Check';
import './ChannelCard.css'


export default function ChannelCard({
    image,
	channel,
	verified,
	subs,
	noOfVideos,
	description,
}) {
  return (
    <div className='channelcard'>
     <Avatar className='channelicon' src={image}/>
     <div className="channeltext">
        <h4>
            {channel} {verified && <CheckIcon className='channelico'/> }
        </h4>
        <p>
            {subs} subscriber and {noOfVideos} video 
         </p>
         <p>{description}</p>
     </div>
    </div>
  )
}
