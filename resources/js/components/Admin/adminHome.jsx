import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import Manager from "./managers/Managers";
import Farmers from "./farmers/Farmers";
import Dashboard from "./Dashboard";
import Orders from "./orders/ordersFrontPage";
import Production from "./production/Production";
import Sales from "./sales/Sales";
import Farms from "./farms/Farms";

import "./home.css";

class adminHome extends React.Component {
    state = {
        loadDashboard: 1,
        farmID: "",
    };

    backImg = ["backImg1", "backImg2", "backImg3", "backImg4", "backImg5", "backImg6","", "", "backImg7"];

    changeLoadDashboard = (index) => {
        this.setState({ loadDashboard: index });
    };

    changeFarmID = (id, loader) => {
        this.setState({ farmID: id });
        this.setState({ loadDashboard: loader });
    };

    render() {
        // console.log("disableElevation: " + this.props.disableElevation);
        return (
            <div className="admin-root">
                <div className="topbar">
                    <Topbar />
                </div>
                <div className="contents">
                    <div className="sidebar">
                        <Sidebar
                            onChange={this.changeLoadDashboard}
                            dashVal={this.state.loadDashboard}
                        />
                    </div>

                    <div
                        className={
                            "home " + this.backImg[this.state.loadDashboard - 1]
                        }
                    >
                        {this.state.loadDashboard === 1 && (
                            <Dashboard value={"Dashboard"} />
                            // <Manager rows={this.state.showUsers} />
                        )}
                        {this.state.loadDashboard === 2 && (
                            <Production value={"Production"} />
                        )}
                        {this.state.loadDashboard === 3 && (
                            <Sales value={"Sales"} />
                        )}
                        {this.state.loadDashboard === 4 && (
                            <Manager value={"Sales"} />
                        )}
                        {this.state.loadDashboard === 5 && (
                            <Farmers farmID={this.state.farmID} />
                        )}
                        {
                            this.state.loadDashboard === 6 && (
                                <Farms changeFarmID={this.changeFarmID} />
                            )
                            // <Dashboard value={"Employee"} />
                        }
                        {/* {
                            this.state.loadDashboard === 7 &&
                                "Under Construction-7"
                            // <Dashboard value={"Employee"} />
                        } */}
                        {
                            this.state.loadDashboard === 8 && "Loading Messages"
                            // <Dashboard value={"Employee"} />
                        }
                        {
                            this.state.loadDashboard === 9 && <Orders />
                            // <Dashboard value={"Employee"} />
                        }
                        {
                            this.state.loadDashboard === 10 &&
                                "Under Construction-10"
                            // <Dashboard value={"Employee"} />
                        }
                        {
                            this.state.loadDashboard === 11 &&
                                "Under Construction-11"
                            // <Dashboard value={"Employee"} />
                        }

                        {/* <Dashboard /> */}
                        {/* <Routes>
                    <Route
                        exact
                        path="/ceo/dashboard"
                        element={<Dashboard />}
                    />
                </Routes> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default adminHome;
