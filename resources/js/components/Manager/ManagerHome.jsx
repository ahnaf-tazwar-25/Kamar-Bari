import React from "react";
import Topbar from "./Topbar/Topbar";
import Sidebar from "./Sidebar/Sidebar";
import Status from "./Status/Status";
import AnimalsFrontPage from "./animals/AnimalsFrontPage";
import OrdersFrontPage from "./orders/OrdersFrontPage";
import Messages from "./messages/Messages";
import Farmers from "./farmers/Farmers";
import axios from "axios";

import "./home.css";

// import "../Admin/Topbar/topbar.css";

class ManagerHome extends React.Component {
    state = {
        loadDashboard: 1,
        test: this.test(),
        test2: "s",
    };

    backImg = [
        "manager-backImg1",
        "manager-backImg2",
        "manager-backImg3",
        "N",
        "manager-backImg4",
    ];

    changeLoadDashboard = (index) => {
        this.setState({ loadDashboard: index });
    };

    async getOrders() {
        // console.log("Working");
        const res = await axios
            .get("/MANAGER_getFarmSpace")
            .then((response) => {
                // console.log(response.data.animals);
                // console.log(response.data.area);
                this.setState({ test2: response.data.area });
            });
        // console.log(this.state.order.farmDetails.farmName);
    }

    test() {
        this.getOrders();
        // console.log("Working");
        return 34;
    }

    componentDidMount() {
        // console.log(this.state.test2);
    }

    render() {
        return (
            <div className="manager-root">
                <div className="manager-topbar">
                    <Topbar
                        onChange={this.changeLoadDashboard}
                        activeContent={this.state.loadDashboard}
                    />
                </div>
                <div className="manager-contents">
                    {/* <div className="manager-sidebar">
                        <Sidebar onChange={this.changeLoadDashboard} />
                    </div> */}

                    <div
                        className={
                            "manager-home " +
                            this.backImg[this.state.loadDashboard - 1]
                        }
                    >
                        {this.state.loadDashboard === 1 && (
                            <Status see={this.state.test2} onChange={this.changeLoadDashboard} />
                        )}
                        {this.state.loadDashboard === 2 && <AnimalsFrontPage />}
                        {this.state.loadDashboard === 3 && <OrdersFrontPage />}
                        {this.state.loadDashboard === 4 && <Messages />}
                        {this.state.loadDashboard === 5 && <Farmers />}
                        {this.state.loadDashboard === 6 &&
                            "Under Construction-6"}
                        {
                            this.state.loadDashboard === 7 &&
                                "Under Construction-7"
                            // <Dashboard value={"Employee"} />
                        }
                        {
                            this.state.loadDashboard === 8 &&
                                "Under Construction-8"
                            // <Dashboard value={"Employee"} />
                        }
                        {
                            this.state.loadDashboard === 9 &&
                                "Under Construction-9"
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

export default ManagerHome;
