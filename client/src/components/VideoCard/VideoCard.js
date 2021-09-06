import React from 'react';
import './_videoCard.scss';

const VideoCard = ({video}) => {
    if (video.length > 4) return (
        <h4 className="video-difficulty">gotta start somewhere...</h4>
    )
    
    return (
        <div className='video'>
        <div className='video-card'>
        {video.map((video) => (
        <div>
            <div className='video-card__img'>
           <img className='video-card__real-img' src= {video.image} alt="" />
           </div>
           <div className="video-card__title">
           <p>Difficulty Level: {video.difficulty} </p> 
           
            <p>{video.title}</p>
            <p>{video.video}</p>
           
            </div>

           
        </div>
    ))}</div>
    </div>
    )}

export default VideoCard;