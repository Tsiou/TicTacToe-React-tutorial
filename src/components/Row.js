import React from "react";

const Row = ({ items,  }) => (
    <div className="board-row">
        {items.map(item => item)}
    </div>
);

export default Row;