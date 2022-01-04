import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./duckControlPanel.css";

import ModalChicken from "./ModalChicken";

function createData(name, healthyEggs, spoiledEggs) {
    return { name, healthyEggs, spoiledEggs };
}

const rows = [createData("Broiler", 159, 24), createData("Deshi", 262, 24)];

class EggChicken extends React.Component {
    state = {
        activeIndex: 0,
        data: [],
        farmID: null,
        render: this.startRender(),
    };

    startRender() {
        this.getProductInfo();
        // console.log("Working");
        return 1;
    }

    async getProductInfo() {
        const res = await axios
            .get("/MANAGER_getAnimalProducts")
            .then((response) => {
                // console.log(response.data.animalProducts);
                this.setState({
                    data: [
                        {
                            name: "Broiler",
                            healthyEggs:
                                response.data.animalProducts
                                    .broiler_egg_healthy,
                            spoiledEggs:
                                response.data.animalProducts
                                    .broiler_egg_spoiled,

                            farmID: response.data.animalProducts.farmID,
                        },
                        {
                            name: "Deshi",
                            healthyEggs:
                                response.data.animalProducts.deshi_egg_healthy,
                            spoiledEggs:
                                response.data.animalProducts.deshi_egg_spoiled,

                            farmID: response.data.animalProducts.farmID,
                        },
                    ],
                });
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
                                        <strong> Egg Of</strong>
                                    </TableCell>
                                    <TableCell align="center">
                                        <strong> Healthy Egg</strong>
                                    </TableCell>
                                    <TableCell align="center">
                                        <strong> Spoiled Egg</strong>
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
                                            {row.healthyEggs}

                                            <ModalChicken
                                                item={row.healthyEggs}
                                                id={row.farmID}
                                                eggOf={row.name}
                                                eggCondition="healthy"
                                                actionType={"AE"}
                                                address="MANAGER_updateEggs"
                                            />
                                        </TableCell>

                                        <TableCell align="center">
                                            {row.spoiledEggs}
                                            <ModalChicken
                                                item={row.spoiledEggs}
                                                id={row.farmID}
                                                eggOf={row.name}
                                                eggCondition="spoiled"
                                                actionType={"AE"}
                                                address="MANAGER_updateEggs"
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

export default EggChicken;
