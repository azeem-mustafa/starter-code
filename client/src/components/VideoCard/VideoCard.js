import React from 'react';
import './_videoCard.scss';

const VideoCard = ({video}) => {
    console.log(video)
    return (
        
        <div className="video">


        <p>Difficulty Level: {video.difficulty} </p>
        <div className='video-card'>

            <div className="video-card__img">
           <img src= {video.image} alt="" />
           </div>
            
           <div className='video-card__title'>
               <p>THIS ISSS{video.title}</p>
           </div>
        </div>
        </div>
    );
};

export default VideoCard;