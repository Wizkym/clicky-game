import React from "react";

const Chars = props => (
    <div className="col-4">
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={props.image} alt={props.name}/>
                <div className="card-body">
                    <ul>
                        <li>
                            <strong>Name:</strong> {props.name}
                        </li>
                        <li>
                            <strong>Occupation:</strong> {props.occupation}
                        </li>
                        <li>
                            <strong>Location:</strong> {props.location}
                        </li>
                    </ul>
                </div>
                <span onClick={() => props.shuffleCards(props.id)} className="remove">
                </span>
            </div>
    </div>
);

export default Chars;