import React from 'react';
// import './Card.css';

const Card = ({title,imageURL,body})=>{
    return(
        // <div className="card">
        //     <div className="card-title" style={{"width": "18rem"}}>
        //         <h3>{title}</h3>
        //     </div>
        //     <div className="image-container">
        //         <img src={imageURL} alt=''/>
        //     </div>
        //     <div className="card-body">
        //         <p>{body}</p>
        //     </div>
        // </div>
    <div className="card shadow p-3 mb-5 bg-body rounded-3" style={{"width": "18rem"}}>
        <div>
            <h5 class="card-title text-start fs-4">{title}</h5>
        </div>
        <div>
            <img className="card-img-top"  src={imageURL} alt="Card image cap"/>
        </div>
        <div className="card-body">
            <p className="card-text">{body}</p>
        </div>
    </div>
    );
}

export default Card;