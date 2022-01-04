import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import Container from "@mui/material/Container";
import ListAltIcon from "@mui/icons-material/ListAlt";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AssignmentIcon from "@mui/icons-material/Assignment";

import axios from "axios";

import "./status.css";

// const data = [
//     { name: "Chicken", value: 400 },
//     { name: "Duck", value: 200 },
//     { name: "Available Space", value: 200, fill: "#eccc68" },
// ];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
        <g>
            <text
                x={cx}
                y={cy}
                dy={8}
                textAnchor="middle"
                className="h4 font-weight-bold"
                fill={fill}
            >
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path
                d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                stroke={fill}
                fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                textAnchor={textAnchor}
                className="h6"
                fill="rgb(0, 255, 76)"
            >{`Total Space ${value}`}</text>
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={18}
                textAnchor={textAnchor}
                className="h6"
                fill="rgb(0, 255, 55)"
                sx={{ width: 600, height: 600 }}
            >
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};

export default class Example extends PureComponent {
    static demoUrl =
        "https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si";

    state = {
        activeIndex: 0,
        chickenArea: 1,
        duckArea: 1,
        availableArea: 1,
        data: [],
        attendance: true,
        render: this.startRender(),
    };

    onPieEnter = (_, index) => {
        this.setState({
            activeIndex: index,
        });
    };

    startRender() {
        this.getSpace();
        // console.log("Working");
        return 1;
    }

    async getSpace() {
        const res = await axios
            .get("/MANAGER_getFarmSpace")
            .then((response) => {
                this.setState({
                    data: [
                        { name: "Chicken", value: response.data.chickenArea },
                        { name: "Duck", value: response.data.duckArea },
                        {
                            name: "Available Space",
                            value: response.data.availableArea,
                            fill: "#eccc68",
                        },
                    ],
                });
                this.setState({ attendance: response.data.attendanceTaken });
            });
    }

    componentDidMount() {}
    render() {
        return (
            <div className="manager-status d-flex mt-5">
                <div className="manager-status-left manager-card">
                    <Container
                        sx={{
                            width: 800,
                            height: 550,
                            marginLeft: 1,
                            marginBottom: 4,
                        }}
                        // width="50%"
                        // height="100%"
                        maxWidth="xl"
                        // minHeight={500}
                    >
                        <h3 className="display-4 text-center font-weight-bold manager-space-header ">
                            Total Farm Space
                        </h3>
                        <ResponsiveContainer className="manager-responsive-container mt-5 pt-5 ">
                            {/* <ResponsiveContainer width="70%" height="70%"> */}
                            <PieChart width={400} height={200} className="">
                                <Pie
                                    activeIndex={this.state.activeIndex}
                                    activeShape={renderActiveShape}
                                    data={this.state.data}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={190}
                                    innerRadius={130}
                                    // outerRadius={80}
                                    // innerRadius={60}
                                    fill="#2ed573"
                                    dataKey="value"
                                    onMouseEnter={this.onPieEnter}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </Container>
                </div>

                <div className="manager-status-center">
                    {/* <Paper /> */}
                    <Container maxWidth="xl" className="manager-mid-container">
                        <CardActionArea className="manager-card">
                            <div className="text-center text-primarys manager-attendance-icon">
                                {/* <AssignmentIcon */}
                                <ListAltIcon
                                    sx={{
                                        align: "center",
                                        fontSize: 350,
                                    }}
                                    // style={{ color: "rgb(13, 153, 0)" }}
                                />
                            </div>

                            <CardContent
                                sx={{
                                    background: "white",
                                }}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    Farmer Attendance
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color={
                                        this.state.attendance
                                            ? "primary"
                                            : "error"
                                    }
                                >
                                    {this.state.attendance
                                        ? "Today's attendance has been taken"
                                        : "Attendance has not been taken!"}
                                </Typography>
                            </CardContent>

                            <CardActions
                                sx={{
                                    background: "white",
                                }}
                            >
                                <Button
                                    disabled={this.state.attendance}
                                    size="small"
                                    variant="contained"
                                    color="primary"
                                    startIcon={<AssignmentIcon />}
                                    onClick={() => this.props.onChange(5)}
                                >
                                    Take Attendance
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Container>
                </div>

                <div className="manager-status-right ml-5 pl-5">
                    {/* <Button variant="contained" sx={{ borderRadius: 28 }}> */}
                    <IconButton>
                        <Avatar
                            alt="Chicken"
                            sx={{ width: 90, height: 90 }}
                            src="images/chickenManager.png"
                        />
                        {/* <img
                        src="./images/chickenManager.png"
                        height={80}
                        width={80}
                    /> */}
                    </IconButton>
                    <IconButton>
                        <Avatar
                            alt="Duck"
                            sx={{ width: 90, height: 90 }}
                            src="images/duckManager.png"
                        />
                    </IconButton>
                    <IconButton>
                        <Avatar
                            sx={{ bgcolor: "green", width: 90, height: 90 }}
                        >
                            <ShoppingCartOutlinedIcon
                                sx={{ width: 60, height: 60 }}
                            />
                        </Avatar>
                    </IconButton>

                    {/* </Button> */}
                    {/* <div className="d-flex flex-column mt-5 pt-5">
                        <div className="manager-orderItem">
                            <h3 className=" text-center mt-1">
                                Orders Pending
                            </h3>
                            <div className="ml-1 row">
                                <div className="col h4">Type</div>
                                <div className="col h4">Amount</div>
                                <div className="col h4">Address</div>
                            </div>
                            <div className="ml-1 row">
                                <div className="col h5">Chicken</div>
                                <div className="col h5">200</div>
                                <div className="col h5">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Dicta atque quo maxime aut
                                    temporibus qui expedita adipisci impedit
                                    sint eum nisi quia eveniet voluptatem quis,
                                    modi facilis fugit numquam ea?
                                </div>
                            </div>
                        </div>
                        <div className="manager-orderItem">
                            <h3 className=" text-center mt-1">
                                Orders Completed
                            </h3>
                            <div className="ml-1 row">
                                <div className="col h4">Type</div>
                                <div className="col h4">Amount</div>
                                <div className="col h4">Address</div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
}
