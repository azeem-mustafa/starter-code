import React from 'react';

const VideoCard = ({video}) => {
    console.log(video)
    return (
        <div>
           <img src= {video.image} alt="" />
           <p>Difficulty Level: {video.difficulty} </p> 
           <div>
               <p>{video.title}</p>
           </div>
        </div>
    );
};

export default VideoCard;