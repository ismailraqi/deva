import React from 'react';
// import './Card.css';
import './Card.scss';

const Card = ({title,imageURL,body})=>{
    return(
    <div className="Card">
        <div>
            <h5 class="Card-title">{title}</h5>
        </div>
        <div>
            <img className="Card-img"  src={imageURL} alt="Cat image"/>
        </div>
        <div className="Card-body">
            <p className="Card-text">{body}</p>
        </div>
    </div>
    );
}

export default Card;