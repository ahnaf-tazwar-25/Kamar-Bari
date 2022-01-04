import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import ListAltIcon from "@mui/icons-material/ListAlt";


export default function MultiActionAreaCard(props) {
    return (
        <Card sx={{ maxWidth: 380}}>
            <CardActionArea >
                {/* <CardMedia
                    component="img"
                    height="300"
                    image={props.imgLocation}
                    alt="green iguana"
                  /> */}

                <ListAltIcon color="success" sx={{ fontSize: 379 }} />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Farmer Attendance
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                    </Typography> */}
                    <Typography variant="body2" color="error">
                        Attendance has not been taken!
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" variant="contained" color="primary">
                    Take Attendance
                </Button>
            </CardActions>
        </Card>
    );
}
