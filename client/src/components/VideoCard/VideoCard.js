import React from 'react';
import './_videoCard.scss';

const VideoCard = ({video}) => {
    console.log(video)
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