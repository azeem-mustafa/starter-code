import React from 'react';
import Img2 from '../../assests/images/img2.png';
import Img3 from '../../assests/images/img3.png';
import Img4 from '../../assests/images/img4.png';
import Img5 from '../../assests/images/img5.png';
import Img6 from '../../assests/images/img6.png';
import Img7 from '../../assests/images/img7.png';

import './_resourceCard.scss';


const ResourceCard = ({video}) => {
    return ( video.map((video) => {
        <div className="resources">
           <div className="card">
            
               <div className="card__pic">   
               </div>
               <div className="card_desc">
                       <h2>{video.title}</h2>
                       <p>{video.descriptions}</p>
                   </div>
           </div>
            
            
        </div>
    }))
};

export default ResourceCard;