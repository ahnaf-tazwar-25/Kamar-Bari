import React, { Component } from "react";
import "./managers.css";
import ManagerFrontPage from "./ManagerFrontPage";
import AddManager from "./AddManager";

const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Full Name", width: 200 },
    { field: "age", headerName: "Age", width: 130 },
    { field: "favColor", headerName: "Favourite Color", width: 200 },
];



class Manager extends React.Component {
    state = {
        showManagers: [],
        availableFarms: [],
        loadManagerIndex: 1,
    };

    changeManagerIndex = (index) => {
        this.setState({ loadManagerIndex: index });
    };

    getUsers = async () => {
        let tempManagers = [];
        let tempFarms = [];

        // tempManagers.push({
        //     id: "1125",
        //     name: "No Name",
        //     farmID: "21324",
        //     dOB: "12-Dec-2011",
        //     salary: 25000,
        // });

        const res1 = await axios.get("/CEO_loadManager").then((response) => {
            response.data.user.map((user, key) => {
                // console.log(user);
                tempManagers.push({
                    id: user.id,
                    name: user.name,
                    farmID: user.farmID,
                    dOB: user.dOB,
                    salary: user.salary,
                    status: user.status,

                });
            });
            this.setState({ showManagers: tempManagers });
        });

        const res2 = await axios.get("/CEO_getAvailableFarms").then((response) => {
            response.data.farms.map((farm, key) => {
                tempFarms.push(farm.id);
            });
            this.setState({ availableFarms: tempFarms });
        });
    };

    componentDidMount = () => {
        this.getUsers();
    };
    render() {
        // this.getUsers();
        // console.log(this.props.rows);
        return (
            <div>
                {this.state.loadManagerIndex === 1 && (
                    <ManagerFrontPage  rows={this.state.showManagers} onChange={this.changeManagerIndex}/>
                )}
                {this.state.loadManagerIndex === 2 && (
                    <AddManager farms={this.state.availableFarms} onChange={this.changeManagerIndex}/>
                )}
                {this.state.loadManagerIndex === 3 && (
                    "Manager Details"
                )}
            </div>
        );
    }
}

export default Manager;
