import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./Farms.css";
import AddFarm from "./AddFarm";
import FarmsFrontPage from "./FarmsFrontPage";

// const columns = [
//     { field: "id", headerName: "ID", width: 200 },
//     { field: "name", headerName: "Full Name", width: 200 },
//     { field: "farmID", headerName: "Farm ID", width: 200 },
//     { field: "dOB", headerName: "Date Of Birth", width: 200 },
//     { field: "salary", headerName: "Salary in BDT", width: 200 },
//     { field: "status", headerName: "Status", width: 200 },
//     { field: "action", headerName: "Action", width: 200 },
// ];

class Farms extends React.Component {
    state = {
        farmsList: [],
        managersList: [],
        loadFarmIndex: 1,
    };

    changeManagerIndex = (index) => {
        this.setState({ loadFarmIndex: index });
    };

    getUsers = async () => {
        let tempFarmsList = [];
        let tempManagersList = [];

        const res1 = await axios.get("/CEO_loadFarms").then((response) => {
            // console.log(response.data.user[0].name);
            response.data.farms.map((user, key) => {
                // console.log(user);
                tempFarmsList.push({
                    serial: key + 1,
                    id: user.id,
                    name: user.name,
                    managerID: user.managerID,
                    address: user.address,
                    area: user.area,
                    // totalFarmers: user.totalFarmers,
                    status: user.status,
                    cost: user.cost,
                });
            });
            this.setState({ farmsList: tempFarmsList });
        });

        const res2 = await axios.get("/CEO_loadManager").then((response) => {
            response.data.user.map((user, key) => {
                tempManagersList.push(user.id);
            });
            this.setState({ managersList: tempManagersList });
        });
    };

    componentDidMount = () => {
        this.getUsers();
    };

    changeFarmID = (id, loader) => {
        this.props.changeFarmID(id, loader);
    };

    render() {
        return (
            <div>
                {this.state.loadFarmIndex === 1 && (
                    <FarmsFrontPage
                        rows={this.state.farmsList}
                        onChange={this.changeManagerIndex}
                        changeFarmID={this.changeFarmID}
                        getUsers={this.getUsers}
                    />
                )}
                {this.state.loadFarmIndex === 2 && (
                    <AddFarm
                        rows={this.state.farmsList}
                        onChange={this.changeManagerIndex}
                        managersList={this.state.managersList}
                    />
                )}
            </div>
        );
    }
}

export default Farms;
