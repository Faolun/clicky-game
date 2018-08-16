import React from "react";

// csslink

const Card = props => (
    <div
        className="card"
        value={props.id}
        onClick={() => props.handleClick(props.id)}
    >
        <div className="image">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);

export default Card;