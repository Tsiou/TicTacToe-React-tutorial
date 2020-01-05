import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const SortButton = ({ isAscending, changeSorting }) => (
  <button onClick={changeSorting}>
    {isAscending ? (
      <span>
        sorting: <FontAwesomeIcon icon={faArrowDown} />
      </span>
    ) : (
      <span>
        sorting: <FontAwesomeIcon icon={faArrowUp} />
      </span>
    )}
  </button>
);

SortButton.propTypes = {
  isAscending: PropTypes.bool,
  changeSorting: PropTypes.func
};

export default SortButton;