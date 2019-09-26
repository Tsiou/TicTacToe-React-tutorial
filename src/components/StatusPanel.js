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
        const {status, moves} = this.props;
        const isAscending = this.state.isAscending;

        return (
            
            <div className="game-info">
                <div>{status}</div>
                <SortButton
                    isAscending={isAscending}
                    changeSorting={() => this.changeSorting()}
                />
                <MoveList
                    isAscending={isAscending}
                    moves={moves}
                />
            </div>
        );
    }
}

export default StatusPanel;