import * as React from "react";
import Button from "@material-ui/core/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./duckControlPanel.css";

import AddDuckModal from "./AddDuckModal";

function createData(name, healthyDucks, quarantinedDucks, deadDucks) {
    return { name, healthyDucks, quarantinedDucks, deadDucks };
}

const rows = [
    createData("Broiler", 159, 6.0, 24, 4.0),
    createData("Pakisthani", 237, 9.0, 37, 4.3),
    createData("Deshi", 262, 16.0, 24, 6.0),
    createData("Khashi", 100, 2, 24, 6.0),
];

class DuckControlPanel extends React.Component {
    state = {
        activeList: 1,
        data: [],
        farmID: null,
        render: this.startRender(),
    };

    changeAchtiveness = (index) => {
        this.setState({ activeList: index });
        this.props.onChange(index);
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
                console.log(response.data.animals);
                this.setState({ farmID: response.data.animals.farmID });
                this.setState({
                    data: [
                        {
                            name: "Deshi",
                            healthyDucks: response.data.animals.duck_healthy,
                            quarantinedDucks:
                                response.data.animals.duck_quarantined,
                            deadDucks: response.data.animals.duck_dead,
                            id: response.data.animals.farmID,
                        },
                    ],
                });
                // console.log(this.state.data);
            });
    }

    render() {
        return (
            <>
                <div className="animalTable">
                    <TableContainer style={{ width: "90%" }} component={Paper}>
                        <Table sx={{ minWidth: 150 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <strong> Chicken Type</strong>
                                    </TableCell>
                                    <TableCell align="center">
                                        <strong> No. Of Healthy Ducks</strong>
                                    </TableCell>
                                    <TableCell align="center">
                                        <strong>
                                            {" "}
                                            No. Of Quarantined Ducks
                                        </strong>
                                    </TableCell>
                                    <TableCell align="center">
                                        <strong> Dead Ducks</strong>
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
                                            {row.healthyDucks}
                                            <AddDuckModal
                                                id={row.id}
                                                item={row.healthyDucks}
                                                query={"duck_healthy"}
                                                actionType={"A"}
                                            />
                                        </TableCell>

                                        <TableCell align="center">
                                            {row.quarantinedDucks}
                                            <AddDuckModal
                                                id={row.id}
                                                item={row.quarantinedDucks}
                                                query={"duck_quarantined"}
                                                actionType={"A"}
                                            />
                                        </TableCell>

                                        <TableCell align="center">
                                            {row.deadDucks}
                                            <AddDuckModal
                                                id={row.id}
                                                item={row.deadDucks}
                                                query={"duck_dead"}
                                                actionType={"A"}
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

export default DuckControlPanel;
