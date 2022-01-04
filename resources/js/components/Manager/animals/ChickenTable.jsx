import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./duckControlPanel.css";
import axios from "axios";

import ModalChicken from "./ModalChicken";

class ChickenControlPanel extends React.Component {
    state = {
        activeIndex: 0,
        data: [],
        farmID: null,
        render: this.startRender(),
    };

    startRender() {
        this.getChickenInfo();
        // console.log("Working");
        return 1;
    }

    async getChickenInfo() {
        const res = await axios
            .get("/MANAGER_getChickenInfo")
            .then((response) => {
                // console.log(response.data.animals.farmID);
                this.setState({ farmID: response.data.animals.farmID });
                this.setState({
                    data: [
                        {
                            name: "Broiler",
                            healthyChickens:
                                response.data.animals.broiler_chicken_healthy,
                            quarantinedChickens:
                                response.data.animals
                                    .broiler_chicken_quarantined,
                            deadChickens:
                                response.data.animals.broiler_chicken_dead,
                        },
                        {
                            name: "Deshi",
                            healthyChickens:
                                response.data.animals.deshi_chicken_healthy,
                            quarantinedChickens:
                                response.data.animals.deshi_chicken_quarantined,
                            deadChickens:
                                response.data.animals.deshi_chicken_dead,
                        },
                    ],
                });
                // console.log(this.state.data);
            });
    }

    componentDidMount() {}
    render() {
        return (
            <>
                <div className="animalTable mh-100">
                    <TableContainer style={{ width: "90%" }} component={Paper}>
                        <Table sx={{ minWidth: 150 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <strong> Chicken Type</strong>
                                    </TableCell>
                                    <TableCell align="center">
                                        <strong> Healthy Chickens</strong>
                                    </TableCell>
                                    <TableCell align="center">
                                        <strong> Quarantined Chickens</strong>
                                    </TableCell>
                                    <TableCell align="center">
                                        <strong> Dead Chickens</strong>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.data.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>

                                        <TableCell align="center">
                                            {row.healthyChickens}

                                            <ModalChicken
                                                address={
                                                    "MANAGER_updateAnimals"
                                                }
                                                id={this.state.farmID}
                                                itemName={row.name}
                                                item={row.healthyChickens}
                                                actionType={"AC"}
                                                secondID={"healthy"}
                                            />
                                        </TableCell>

                                        <TableCell align="center">
                                            {row.quarantinedChickens}
                                            <ModalChicken
                                                address={
                                                    "MANAGER_updateAnimals"
                                                }
                                                id={this.state.farmID}
                                                itemName={row.name}
                                                item={row.quarantinedChickens}
                                                actionType={"AC"}
                                                secondID={"quarantined"}
                                            />
                                        </TableCell>

                                        <TableCell align="center">
                                            {row.deadChickens}
                                            <ModalChicken
                                                address={
                                                    "MANAGER_updateAnimals"
                                                }
                                                id={this.state.farmID}
                                                itemName={row.name}
                                                item={row.deadChickens}
                                                actionType={"AC"}
                                                secondID={"dead"}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </>
        );
    }
}

export default ChickenControlPanel;
