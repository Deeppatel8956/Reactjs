import React from 'react';
import { Link } from 'react-router-dom';
import './Videocard.css';
function VideoCard(
    {
        image,
        title,
        channel,
        channelImage,
        path,
        views,
        timestamp
    }
) {
    return (
        <div>
            <Link to={path} className='VideoCard' style={{textDecoration:'none'}}>
            <img src={image} alt="not show" className='VideoCardImage' />
            <div className="VideoCardInfo">
                <img src={channelImage} alt="" className='VideoCardAvatar' />
                <div className="VideoCardText">
                    <h4>{channel}</h4>
                    <p>{title}</p>
                    <p>
                        {views} . {timestamp}
                    </p>
                </div>
            </div>
            </Link>
        </div>
    );
}

export default VideoCard;