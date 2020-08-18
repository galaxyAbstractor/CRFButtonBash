import React, {Component} from "react";
import {ipcRenderer} from "electron";

class TimeCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            presses: 0,
            remainingTime: 0
        };


        ipcRenderer.on("update", (event, args) => {
            this.setState(args)
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="row current-level">
                        <div className="col text-center">
                            <span>{this.state.remainingTime}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TimeCounter;