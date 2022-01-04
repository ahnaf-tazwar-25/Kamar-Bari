import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Redirector from "./Redirector";

import "./signin.css";

class Signin extends React.Component {
    // state = { id: "", password: "", status: "asd" , _token: $('meta[name="csrf-token"]').attr('content')};
    state = {
        id: "",
        password: "",
        _token: $('meta[name="csrf-token"]').attr("content"),
        comp: null,
    };
    // }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        // this.setState({ status: "Working" });
    }

    getAllContacts = async () => {
        const res = await axios.get("/users").then((response) => {
            console.log(response.data.user);
        });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const res = await axios
            // .post("/register", this.state)
            .post("/signin", this.state)
            .then((response) => {
                if (response.data.user) {
                    // console.log(response.data.user);
                    // console.log(response.data.type);
                    // console.log("Working");
                    this.setState({
                        comp: <Redirector type={response.data.type} />,
                    });
                    // this.setState({ comp: "Signed IN" });
                } else {
                    this.setState({ comp: "Invalid Credentials" });
                }
            })
            .catch((error) => {
                alert("This was the error:\n" + error);
            });
    };

  

    render() {
        // setTimeout(() => {
            // this.setState({ comp: <Redirector reDirect={false}/> });
        // }, 1000);

        // axios.post("/auth", null).then((respond) => {
        //     comp: <Redirector type={null} />;
        // });

        return (
            <>
                <ThemeProvider theme={createTheme()}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <h1 className="display-4 mb-4 headLine">Khamar Bari</h1>
                            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Box
                                component="form"
                                // onSubmit={handleSubmit}
                                noValidate
                                sx={{ mt: 1 }}
                            >
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="id"
                                    label="User ID"
                                    name="id"
                                    onChange={(e) => this.handleChange(e)}
                                    autoComplete="id"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    onChange={(e) => this.handleChange(e)}
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                {/* <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="remember"
                                            color="primary"
                                        />
                                    }
                                    label="Remember me"
                                /> */}
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    onClick={this.handleSubmit.bind(this)}
                                    sx={{ mt: 3 }}
                                >
                                    Sign In
                                </Button>
                                <Button
                                    className="signin-cancel-btn"
                                    style={{ textDecoration: "none" }}
                                    fullWidth
                                    variant="contained"
                                    color="error"
                                    sx={{ mt: 1, mb: 2 }}
                                    // onClick={routeTo}
                                    href="/"
                                >
                                    Cancel
                                </Button>
                                {this.state.comp}
                                <Grid container>
                                    <Grid item xs>
                                        {/* <Link to="/" variant="body2"> */}
                                        <Link to="/">Forgot password?</Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>

                        {/* <Typography
                            color="text.secondary"
                            align="center"
                            {...props}
                        >
                            {"Copyright © "}
                            <Link color="inherit" href="https://mui.com/">
                                Your Website
                            </Link>{" "}
                            {new Date().getFullYear()}
                            {"."}
                        </Typography> */}
                    </Container>
                </ThemeProvider>
            </>
        );
    }
}
export default Signin;

// // const withNavigate = (props) => {
// const withNavigate = () => {
//     let navigate = useNavigate();
//     return (
//         // <Signin {...props} navigate={navigate}/>
//         <Signin navigate={navigate} />
//     );
// };

// export default withNavigate;

{
    /* <div className="signin container col-10">
                    <h4 className="signinTitle">
                        Please Sign in with your user ID and password
                    </h4>

                    <form
                        onSubmit={this.handleSubmit.bind(this)}
                        className="form"
                    >
                        <div className="row">
                            <div className="col">
                                <input
                                    type="hidden"
                                    name="_token"
                                    value={this.state._token}
                                />
                                <input
                                    type="text"
                                    className="form-control mb-3 w-50"
                                    placeholder="Enter User ID"
                                    name="id"
                                    value={this.state.id}
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input
                                    type="password"
                                    className="form-control mb-3 w-50"
                                    placeholder="Password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <input
                                type="submit"
                                className="btn btn-primary login"
                                value="Log in"
                            />
                        </div>
                    </form>
                </div> */
}
