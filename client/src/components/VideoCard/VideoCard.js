import React from 'react';
import './_videoCard.scss';

const VideoCard = ({video}) => {
    if (video.length > 4) return (
        <h4 className="video-difficulty">gotta start somewhere...</h4>
    )
    
    return (
        <div>
        {video.map((video) => (
        <div>
           <img src= {video.image} alt="" />
           <p>Difficulty Level: {video.difficulty} </p> 
           <p>{video.channel}</p>
            <p>{video.title}</p>
            <p>{video.video}</p>
            <p>{video.description}</p>

           
        </div>
    ))}</div>
    )}

export default VideoCard;