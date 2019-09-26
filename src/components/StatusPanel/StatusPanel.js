import React, { Component } from "react";
import MoveList from "./MoveList";
import SortButton from "./SortButton";

class StatusPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAscending: true
        }
    }

    changeSorting() {
        this.setState({
            isAscending: !this.state.isAscending
        });
    }

    render() {
        const { status, moves, hovered, onClick } = this.props;
        const { isAscending } = this.state;

        const sortedMoves = [moves[0], ...moves.slice(1).sort((a, b) =>
            (isAscending ? a.move > b.move : a.move < b.move))
        ]

        return (

            <div className="game-info">
                <div>{status}</div>
                <SortButton
                    isAscending={isAscending}
                    changeSorting={() => this.changeSorting()}
                />
                <MoveList
                    hovered={hovered}
                    onClick={onClick}
                    moves={sortedMoves}
                />
            </div>
        );
    }
}

export default StatusPanel;