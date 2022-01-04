import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./duckControlPanel.css";

function createData(name, healthyChickens, quarantinedChickens, deadChickens) {
    return { name, healthyChickens, quarantinedChickens, deadChickens };
}

const rows = [
    createData("Broiler", 159, 6.0, 24),
    createData("Pakisthani", 237, 90, 37),
    createData("Deshi", 262, 160, 24),
    createData("Khashi", 100, 2, 24),
];

class ChickenTransfer extends React.Component {
    state = {
        animalNumber: "",
    };
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        // this.setState({ status: "Working" });
    }
    handleSubmit = async (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="animalTable">
                        <TableContainer
                            style={{ width: "90%" }}
                            component={Paper}
                        >
                            <Table
                                sx={{ minWidth: 150 }}
                                aria-label="simple table"
                            >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            <strong> Chicken Type</strong>
                                        </TableCell>
                                        <TableCell align="center">
                                            <strong> Chickens</strong>
                                        </TableCell>
                                        <TableCell align="center">
                                            <strong> Chicken Products</strong>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{
                                                "&:last-child td, &:last-child th":
                                                    {
                                                        border: 0,
                                                    },
                                            }}
                                        >
                                            <TableCell
                                                component="th"
                                                scope="row"
                                            >
                                                {row.name}
                                            </TableCell>

                                            <TableCell align="center">
                                                <TextField
                                                    required
                                                    type="number"
                                                    InputProps={{
                                                        inputProps: { min: 0 },
                                                    }}
                                                    className="field"
                                                    variant="outlined"
                                                    label="Chickens"
                                                    name="animalNumber"
                                                    defaultValue=""
                                                    onChange={(e) =>
                                                        this.handleChange(e)
                                                    }
                                                />
                                            </TableCell>
                                            <TableCell align="center">
                                                <TextField
                                                    required
                                                    type="number"
                                                    InputProps={{
                                                        inputProps: { min: 0 },
                                                    }}
                                                    className="field"
                                                    variant="outlined"
                                                    label="Eggs"
                                                    name="animalNumber"
                                                    defaultValue=""
                                                    onChange={(e) =>
                                                        this.handleChange(e)
                                                    }
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <div className="submitBtn">
                            <Button
                                type="submit"
                                variant="outlined"
                                color="primary"
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </form>
            </>
        );
    }
}

export default ChickenTransfer;
