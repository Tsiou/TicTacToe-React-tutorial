import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

interface SortButtonProps {
	isAscending: boolean;
	changeSorting: React.MouseEventHandler<HTMLButtonElement>;
}

const SortButton: React.FC<SortButtonProps> = ({
	isAscending,
	changeSorting,
}) => (
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
	isAscending: PropTypes.bool.isRequired,
	changeSorting: PropTypes.func.isRequired,
};

export default SortButton;
