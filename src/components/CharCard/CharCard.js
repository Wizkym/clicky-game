import React from "react";
import "./CharCard.css";

//pass the image into each card so all 12 are rendered
const CharCard= props => (
    <div className="col-sm-6 col-md-3 my-card">
        <div className="card" onClick={() => props.shuffleCards(props.id)}>
            <div className="img-container">
                <img className="card-img-top center" src={props.image} alt={props.name}/>
            </div>
        </div>
    </div>
);

export default CharCard;