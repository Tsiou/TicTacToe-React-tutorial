import React from "react";

const ListItem = ({ move, isHovered, onClick, description }) => (
    <li key={move}>
        <button
            className={(isHovered ? "hovered" : "")}
            onClick={() => onClick()}
        >
            {description}
        </button>
    </li>
);

export default ListItem;