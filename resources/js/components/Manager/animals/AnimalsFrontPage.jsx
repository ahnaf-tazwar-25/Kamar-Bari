import React, { Component } from "react";
import AnimalsChoose from "./AnimalsChoose";
import ChickenControlPanel from "./ChickenControlPanel";
import DuckControlPanel from "./DuckControlPanel";

class AnimalsFrontPage extends React.Component {
    state = {
        loadDashboard: 1,
    };

    changeLoadDashboard = (index) => {
        this.setState({ loadDashboard: index });
    };

    render() {
        return (
            <>
                {this.state.loadDashboard === 1 && (
                    <AnimalsChoose onChange={this.changeLoadDashboard} />
                )}
                {this.state.loadDashboard === 2 && (
                    <ChickenControlPanel onChange={this.changeLoadDashboard} />
                )}
                {this.state.loadDashboard === 3 && (
                    <DuckControlPanel onChange={this.changeLoadDashboard} />
                )}
            </>
        );
    }
}

export default AnimalsFrontPage;
