import React, { Component } from "react";

import FarmersTable from "./FarmersTable";
import FarmerDetails from "./FarmerDetails";

class FarmersList extends React.Component {
    state = {
        loadContents: true,
        farmerID: 0,
        salary: 0,
    };

    backImg = ["manager-backImg1", "manager-backImg2", "manager-backImg3"];

    changeLoadContents = (index, farmerID, sal) => {
        this.setState({ farmerID: farmerID, loadContents: index, salary: sal });
    };

    render() {
        return (
            <div>
                {this.state.loadContents === true && (
                    <FarmersTable changeContent={this.changeLoadContents} />
                )}
                {this.state.loadContents != true && (
                    <FarmerDetails
                        farmerID={this.state.farmerID}
                        salary={this.state.salary}
                        changeContent={this.changeLoadContents}
                    />
                )}
            </div>
        );
    }
}

export default FarmersList;
