import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

export default function BasicCard(props) {
    const [fireConfirm, setFireConfirm] = useState(false);
    const [incementLoad, setIncementLoad] = useState(false);
    const [managerSalary, setManagerSalary] = useState(props.managerParams.salary);
    const [seenSalary, setSeenSalary] = useState(props.managerParams.salary);
    const [status, setStatus] = useState(props.managerParams.status);

    function changeStatus(status) {
        send = { stats: status, managerID: props.managerParams.id };
        axios.post("/CEO_changeManagerStatus", send).then((response) => {
            setStatus(response.data.newStatusValue);
        });
        setFireConfirm(false);
    }

    const handleChangeSalary = (event) => {
        setManagerSalary(event.target.value);
    };

    function changeStatus(status) {
        let send = { stats: status, managerID: props.managerParams.id };
        axios.post("/CEO_changeManagerStatus", send).then((response) => {
            setStatus(response.data.newStatusValue);
        });
        setFireConfirm(false);
    }

    function incrementSalary(salaryVal) {
        let send = { managerID: props.managerParams.id, salary: salaryVal };
        // console.log(salaryVal);
        axios.post("/CEO_incrementManagerSalary", send).then((response) => {
            setManagerSalary(response.data.newSalary);
            setSeenSalary(response.data.newSalary);
        });
        setIncementLoad(false);
    }

    return (
        <Grid container direction="column" alignItems="center" justify="center">
            <Card className="w-75 mt-5">
                <CardContent sx={fireConfirm && { bgcolor: "#f1f2f6" }}>
                    <div className="w-100 d-flex justify-content-between">
                        <Typography
                            className="d-flex align-items-end"
                            variant="h5"
                            component="div"
                        >
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                                sx={{ width: 100, height: 100 }}
                            />
                            <div>
                                <p className=" ml-1">
                                    {props.managerParams.name} <br />{" "}
                                    <Typography
                                        sx={{ mb: 1.5, fontWeight: status === "Fired" ? 800 : 600 }}
                                        color={status === "Fired" ? "red" : "green"}
                                    >
                                        {status}
                                    </Typography>{" "}
                                </p>
                            </div>
                        </Typography>

                        {!fireConfirm && (
                            <Button
                                disabled={status === "Fired" ? true : false}
                                variant="contained"
                                color="error"
                                onClick={() => setFireConfirm(true)}
                                sx={{
                                    height: 1 / 2,
                                    marginTop: 1,
                                    marginRight: 2,
                                }}
                            >
                                <ErrorOutlineIcon />
                                &nbsp; Fire
                            </Button>
                        )}
                    </div>

                    <Typography variant="body2" sx={{ mt: 1.5 }}>
                        <div className="row border-bottom w-50 my-3">
                            <div className="col-2">
                                <strong>ID:</strong>
                            </div>
                            <div className="col-2">
                                {props.managerParams.id}
                            </div>
                        </div>
                        <div className="row border-bottom w-50 pb-2">
                            <div className="col-2 ">Salary:</div>

                            <div className="col-10 d-flex justify-content-between">
                                <div className="">
                                    {seenSalary}
                                </div>

                                <div>
                                    {!incementLoad ? (
                                        <Button
                                            disabled={
                                                fireConfirm ||
                                                status === "Fired"
                                                    ? true
                                                    : false
                                            }
                                            size="small"
                                            variant="outlined"
                                            color="success"
                                            sx={{ mb: 2 }}
                                            onClick={() =>
                                                setIncementLoad(true)
                                            }
                                        >
                                            Increment Salary
                                        </Button>
                                    ) : (
                                        <>
                                            <TextField
                                                required
                                                type="number"
                                                InputProps={{
                                                    inputProps: { min: 0 },
                                                }}
                                                variant="outlined"
                                                label="Increment Manager Salary"
                                                name="incrementSalary"
                                                defaultValue={managerSalary}
                                                className="ml-3"
                                                onChange={(e) =>
                                                    handleChangeSalary(e)
                                                }
                                            />
                                            <button
                                                onClick={() =>
                                                    incrementSalary(managerSalary)
                                                }
                                                className="ml-3 mt-2 btn btn-primary"
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={() =>
                                                    setIncementLoad(false)
                                                }
                                                className="ml-3 mt-2 btn btn-danger"
                                            >
                                                Cancel
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Typography>
                </CardContent>
                <CardActions
                    sx={{
                        background: "white",
                    }}
                >
                    {!fireConfirm ? (
                        <Button
                            size="small"
                            variant="contained"
                            color="primary"
                            onClick={props.loadAddManager}
                        >
                            Close
                        </Button>
                    ) : (
                        <>
                            <strong className="mt-2 mr-2">
                                Are you sure you want to fire{" "}
                                {props.managerParams.name}?
                            </strong>

                            <Button
                                size="small"
                                variant="contained"
                                color="error"
                                onClick={() => changeStatus("Fired")}
                            >
                                Yes
                            </Button>
                            <Button
                                size="small"
                                variant="contained"
                                color="primary"
                                onClick={() => setFireConfirm(false)}
                            >
                                No
                            </Button>
                        </>
                    )}
                </CardActions>
            </Card>
        </Grid>
    );
}
