import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard(props) {
    const [expanded, setExpanded] = React.useState(false);
    // const [test, setTest] = React.useState(props.orderInfo);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    React.useEffect(() => {
        console.log(props.orderInfo);
    }, []);

    return (
        <Card sx={{ maxWidth: 345, bgcolor: "#f7f1e3" }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "green" }} aria-label="recipe">
                        <ShoppingCartIcon />
                    </Avatar>
                }
                action={
                    <Typography
                        variant="body2"
                        sx={{ color: "green", fontWeight: 500, marginLeft: 5, marginRight: 1 }}
                    >
                        {props.orderInfo.status}
                    </Typography>
                }
                title={"Order ID: " + props.orderInfo.id}
                // subheader="3 Days left"
                subheader={props.difference + " Days left"} 
            />

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Animals:{props.orderInfo.orderItems}
                    <br />
                    Delivery Date: {props.orderInfo.deadline}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Typography variant="body2" color="text.secondary">
                    More Details:
                </Typography>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography className="border-bottom" paragraph>
                        <div className="row">
                            <div className="col-6">
                                <strong>Customer Name: </strong>
                            </div>
                            <div className="col-6">
                                {props.orderInfo.cusName}
                            </div>
                        </div>
                    </Typography>
                    <Typography className="border-bottom" paragraph>
                        <div className="row">
                            <div className="col-6">
                                <strong>Contact No.: </strong>
                            </div>
                            <div className="col-6">
                                {props.orderInfo.contactNo}
                            </div>
                        </div>
                    </Typography>
                    <Typography className="border-bottom" paragraph>
                        <div className="row">
                            <div className="col-6">
                                <strong>Animals: </strong>
                            </div>
                            <div className="col-6">
                                {props.orderInfo.orderItems}
                            </div>
                        </div>
                    </Typography>
                    <Typography>
                        <div className="row">
                            <div className="col-6">
                                <strong> Deivery Date: </strong>
                            </div>
                            <div className="col-6">
                                {props.orderInfo.deadline}
                            </div>
                        </div>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
