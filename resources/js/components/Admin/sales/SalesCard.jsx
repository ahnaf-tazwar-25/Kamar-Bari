import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

export default function RecipeReviewCard(props) {
    const [changeVal, setEhangeVal] = React.useState(false);
    const [price, setPrice] = React.useState();
    const [priceBDT, setPriceBDT] = React.useState(10);

    const [broierEggPrice, setBroierEggPrice] = React.useState();
    const [deshiEggPrice, setDeshiEggPrice] = React.useState();
    const [duckEggPrice, setDuckEggPrice] = React.useState();
    const [broilerPrice, setBroilerPrice] = React.useState();
    const [deshiPrice, setDeshiPrice] = React.useState();
    const [duckPrice, setDuckPrice] = React.useState();

    function handleChange(event) {
        setPrice(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        var tempPrice = { new_price: price, name: props.itemName };

        const res = await axios
            .post("/CEO_changeAnimalPrice", tempPrice)
            .then((response) => {
                setPriceBDT(response.data.price);
                setEhangeVal(false);
            })
            .catch((error) => {
                alert("This was the error:\n" + error);
            });
    };

    function loadAnimalPrices() {
        axios
            .get("/CEO_getAnimalPrice")
            .then((response) => {
                setPriceBDT(response.data.animalPrices[props.index].price);
                // setBroierEggPrice(321);
                // console.log(response.data.animalPrices[props.index].price);
                // console.log(broierEggPrice);
            })
            .catch((error) => {
                alert("This was the error:\n" + error);
            });
    }

    React.useEffect(() => {
        loadAnimalPrices();
        // console.log(props.price);
        setPriceBDT(23);
        console.log(priceBDT);
    }, []);

    return (
        <Card sx={{ maxWidth: 345, my: 5 }}>
            <CardHeader
                title={props.header}
                subheader="Last Updated at: September 14, 2021"
            />
            <CardMedia
                component="img"
                height="350"
                image={props.imgLocation}
                alt="Couldn't Load Image"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    <div className="row border-bottom">
                        <div className="col-6">
                            {" "}
                            <strong>Price Per {props.priceUnit}:</strong>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-6">{priceBDT}</div>
                                <div className="col-6">in BDT</div>
                            </div>
                        </div>
                    </div>
                </Typography>
            </CardContent>
            <CardActions>
                {changeVal ? (
                    <>
                        <TextField
                            type="number"
                            InputProps={{ inputProps: { min: 0 } }}
                            variant="outlined"
                            label="New Price"
                            // value={priceBDT}
                            name="price"
                            defaultValue={priceBDT}
                            onChange={(e) => handleChange(e)}
                        />
                        <CardActions>
                            <button
                                onClick={handleSubmit}
                                className="btn btn-primary"
                            >
                                Save
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={() => setEhangeVal(false)}
                            >
                                Discard
                            </button>
                        </CardActions>
                    </>
                ) : (
                    <button
                        className="btn btn-primary"
                        onClick={() => setEhangeVal(true)}
                    >
                        Change Price
                    </button>
                )}
            </CardActions>
        </Card>
    );
}
