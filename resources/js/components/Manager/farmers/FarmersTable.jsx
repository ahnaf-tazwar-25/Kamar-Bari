import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";

const columns = [
    { id: "id", label: "ID", minWidth: 170 },
    { id: "name", label: "id", minWidth: 100 },
    {
        id: "salary",
        label: "Salary",
        minWidth: 170,
        align: "right",
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "duration",
        label: "Duration",
        minWidth: 170,
        align: "right",
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "details",
        label: "Action",
        minWidth: 170,
        align: "right",
        // format: (value) => value.toLocaleString("en-US"),
    },
];

function createData(id, name, salary, size, details) {
    return { id, name, salary, size, details };
}

export default function StickyHeadTable(props) {
    const [page] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(100);
    const [rows, setRows] = React.useState([]);

    const detailsBtn = (
        <button
            onClick={() => props.changeContent(false)}
            className="btn btn-success"
        >
            {" "}
            Details
        </button>
    );

    async function getFarmers() {
        const res = await axios.get("/MANAGER_getFarmers").then((response) => {
            var tempRow = [];
            response.data.farmers.map((farmer, key) => {
                tempRow = [
                    ...tempRow,
                    {
                        id: farmer.id,
                        name: farmer.name,
                        salary: farmer.salary,
                        duration: "2 years, 5 months",
                        details: (
                            <button
                                onClick={() => props.changeContent(false, farmer.id, farmer.salary)}
                                className="btn btn-success"
                            >
                                Details
                            </button>
                        ),
                    },
                ];
            });
            setRows(tempRow);
            setRowsPerPage(tempRow.length);
        });
    }

    React.useEffect(() => {
        getFarmers();
    }, []);


    return (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 800 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((row, key) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={key}
                                    >
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                >
                                                    {column.format &&
                                                    typeof value === "number"
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
