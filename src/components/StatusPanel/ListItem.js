import React from "react";
import PropTypes from "prop-types";

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

ListItem.propTypes = {
    move: PropTypes.number,
    isHovered: PropTypes.bool,
    onClick: PropTypes.func,
    description: PropTypes.string
};

export default ListItem;