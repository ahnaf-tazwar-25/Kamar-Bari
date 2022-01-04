import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";

import axios from "axios";

const columns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "presentCheckBox", label: "Present", minWidth: 100 },
    {
        id: "totalPresent",
        label: "Total Present in December",
        minWidth: 170,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "totalAbsent",
        label: "Total Absent in December",
        minWidth: 170,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
    },
];

var totalPresent = [];
var totalFarmers = null;

export default function StickyHeadTable() {
    const [page] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rows, setRows] = React.useState([]);
    const [presentCount, setPresentCount] = React.useState(0);
    const [attendanceBtn, setAttendanceBtn] = React.useState(false);

    async function getFarmers() {
        const res = await axios.get("/MANAGER_getFarmers").then((response) => {
            var tempRow = [];
            totalFarmers = response.data.farmers.length;
            setRowsPerPage(totalFarmers);
            setAttendanceBtn(response.data.attendanceTaken);
            response.data.farmers.map((farmer, key) => {
                tempRow = [
                    ...tempRow,
                    {
                        name: farmer.name,
                        presentCheckBox: (
                            <Checkbox
                                disabled={response.data.attendanceTaken}
                                key={key}
                                value={farmer.id}
                                onChange={handleChangeCheckbox}
                                icon={<RadioButtonUncheckedOutlinedIcon />}
                                checkedIcon={<CheckCircleIcon />}
                            />
                        ),
                        totalPresent:
                            farmer.present == null ? 0 : farmer.present,
                        totalAbsent: farmer.absent == null ? 0 : farmer.absent,
                    },
                ];
            });
            setRows(tempRow);
        });

        const res2 = await axios
            .get("/MANAGER_getFarmSpace")
            .then((response) => {
                setAttendanceBtn(response.data.attendanceTaken);
            });
    }

    React.useEffect(() => {
        getFarmers();
    }, []);

    const handleChangeCheckbox = (event, isChecked) => {
        if (isChecked) {
            totalPresent = [...totalPresent, event.target.defaultValue];
        } else {
            const counters = totalPresent.filter(
                (c) => c !== event.target.defaultValue
            );
            totalPresent = counters;
        }
        setPresentCount(totalPresent.length);

        if (totalPresent.length === 0) {
            console.log("Length: ", totalPresent.length);
            setAttendanceBtn(true);
        } else {
            setAttendanceBtn(false);
        }
    };

    const submitPresent = async () => {
        const send = { totalPresent: totalPresent };

        const res = await axios
            .post("/MANAGER_takeFarmerAttendance", send)
            .then((response) => {
                console.log("submitPresent: ", response.data.totalPresent);
                console.log("counter: ", response.data.counter);
            });
    };

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

            <div
                className="row border-top p-3 pt-5"
                style={{ marginBottom: "10vh", marginTop: "5vh" }}
            >
                <div className="col-2">
                    {attendanceBtn
                        ? "Attendance cannot be taken"
                        : "Total Present Farmers:"}
                </div>
                <div className="col-2">
                    {presentCount} out of {totalFarmers}
                </div>
                <div className="col-6">
                    <Button
                        disabled={attendanceBtn}
                        variant="contained"
                        onClick={submitPresent}
                    >
                        Submit Attendance
                    </Button>
                </div>
            </div>
        </Paper>
    );
}
