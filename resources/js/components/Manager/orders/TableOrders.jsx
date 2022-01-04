import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Checkbox from "@mui/material/Checkbox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";

const columns = [
    { id: "name", label: "Order ID", minWidth: 170 },
    { id: "code", label: "Animals", minWidth: 100 },
    {
        id: "population",
        label: "Delivery Address",
        minWidth: 170,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "size",
        label: "Action",
        minWidth: 170,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
    },
];

function createData(name, code, population, size) {
    const density = 6;
    return { name, code, population, size };
}

export default function StickyHeadTable(props) {
    const [page] = React.useState(0);
    const [rowsPerPage] = React.useState(10);

    const address = "Mather Kona, Kernaiganj, Dhaka-1212";

    const animals = "100 chcken, 50 Ducks";

    const action = (
        <button
            className="btn btn-success"
            onClick={() => props.onDetails(true)}
        >
            Details
        </button>
    );

    const rows = [
        createData("Anik Rahman", animals, address, action),
        createData("Ashik Ullah", animals, address, action),
        createData("Asadullah", animals, address, action),
        createData("Sumon Hossain", animals, address, action),
        createData("Md. Minhaj", animals, address, action),
        createData("Akbar Mia", animals, address, action),
        createData("Jahirul Islam", animals, address, action),
        createData("Md. Nayeem", animals, address, action),
        createData("Munif Haque", animals, address, action),
        createData("Amit Brua", animals, address, action),
        createData("Md Akter", animals, address, action),
        createData("Jamil Rahman", animals, address, action),
        createData("Sudipta Roy", animals, address, action),
        createData("Mahin", animals, address, action),
        createData("Hannan Mia", animals, address, action),
    ];

    return (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 500 }}>
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
                            .map((row) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.code}
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
