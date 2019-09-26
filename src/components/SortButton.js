import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

const SortButton = ({ isAscending, changeSorting }) => (
    <button
        onClick={() => changeSorting()}
    >
        {isAscending
            ? <span>sorting: <FontAwesomeIcon icon={faArrowDown} /></span>
            : <span>sorting:  <FontAwesomeIcon icon={faArrowUp} /></span>
        }
    </button>
)

export default SortButton;