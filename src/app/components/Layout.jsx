import React, {Component} from "react";
import PressCounter from "./PressCounter";
import TimeCounter from "./TimeCounter";

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid" id="main">
                <div className="row align-items-center row-counters no-gutters">
                    <div className="col col-counter">
                        <div className="counter-text">
                            <PressCounter/>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center row-counters no-gutters">
                    <div className="col col-counter">
                        <div className="counter-text">
                            <TimeCounter/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;