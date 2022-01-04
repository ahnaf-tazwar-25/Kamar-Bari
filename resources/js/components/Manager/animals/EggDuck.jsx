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
import EggDuckModal from "./EggDuckModal";

function createData(name, healthyChickens, quarantinedChickens, deadChickens) {
    return { name, healthyChickens, quarantinedChickens, deadChickens };
}

const rows = [
    createData("Broiler", 159, 6.0, 24),
    createData("Pakisthani", 237, 90, 37),
    createData("Deshi", 262, 160, 24),
    createData("Khashi", 100, 2, 24),
];

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
                console.log(response.data.animalProducts);
                this.setState({
                    data: [
                        {
                            name: "Deshi",
                            healthyEggs:
                                response.data.animalProducts.duck_egg_healthy,
                            spoiledEggs:
                                response.data.animalProducts.duck_egg_spoiled,

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

                                            <EggDuckModal
                                                item={row.healthyEggs}
                                                id={row.farmID}
                                                eggOf={"Duck"}
                                                eggCondition="healthy"
                                            />
                                        </TableCell>

                                        <TableCell align="center">
                                            {row.spoiledEggs}
                                            <EggDuckModal
                                                item={row.spoiledEggs}
                                                id={row.farmID}
                                                eggOf={"Duck"}
                                                eggCondition="spoiled"
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
