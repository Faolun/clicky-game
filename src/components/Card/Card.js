import React from "react";

// csslink

const Card = props => (
    <div
        class="card"
        value={props.id}
        onClick={() => props.handleClick(props.id)}
    >
        <div class="image">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);