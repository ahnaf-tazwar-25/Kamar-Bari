import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Tooltip from "@mui/material/Tooltip";
import "./orderList.css";

const columns = [
    { id: "name", label: "Order ID", minWidth: 170 },
    { id: "code", label: "Items", minWidth: 100 },
    { id: "population", label: "Population", minWidth: 170 },
    { id: "size", label: "Size", minWidth: 170 },
    // {
    //     id: "population",
    //     label: "Address",
    //     minWidth: 170,
    //     align: "right",
    //     format: (value) => value.toLocaleString("en-US"),
    // },
    // {
    //     id: "size",
    //     label: "Delivery Date",
    //     minWidth: 170,
    //     align: "right",
    //     format: (value) => value.toLocaleString("en-US"),
    // },
    /*{
        id: "density",
        label: "Action",
        minWidth: 170,
        align: "right",
        format: (value) => value.toFixed(2),
    },*/
];

export default function StickyHeadTable(props) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [orders, setOrders] = React.useState([]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    function createData(name, code, population, size) {
        const density = (
            <button
                type="button"
                onClick={() => props.changeActive(1)}
                className="btn rounded-pill btn-danger"
            >
                Cancel
            </button>
        );
        const test = population / size;
        // console.log(props);
        return { name, code, population, size };
    }

    

    async function getOrders() {
        let tempOrderList = [];

        const res = await axios.get("/CEO_getOrders").then((response) => {
            // console.log("3");
            // console.log(response.data.orders);

            response.data.orders.map((order, key) => {
                tempOrderList.push({
                    name: order.id,
                    code: order.orderItems,
                    population: order.deliveryAddress,
                    size: order.status,
                });
            });
            setOrders(tempOrderList);
        });
    }

    React.useEffect(() => {
        getOrders();
    }, []);

    return (
        <Paper sx={{ width: "100%", overflow: "hidden", marginTop: 15 }}>
            <TableContainer sx={{ maxHeight: 600 , minHeight: 500}}>
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
                        {orders
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
                                        name="orderCode"
                                        onClick={(e) =>
                                            props.changeActive(1, e.target.innerText)
                                        }
                                        className="tableRow"
                                    >
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            // const value = row[column.label];
                                            return (
                                                <Tooltip title="Click to see details">
                                                    <TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                    >
                                                        {column.format &&
                                                        typeof value ===
                                                            "number"
                                                            ? column.format(
                                                                  value
                                                              )
                                                            : value}
                                                    </TableCell>
                                                </Tooltip>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={orders.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
