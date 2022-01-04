import * as React from "react";

import TextField from "@mui/material/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

class AddForm extends React.Component {
    state = {
        animalNumber: this.props.secondProps.item,
    };
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        // this.setState({ status: "Working" });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        // setOpen(false);
        var send = null;
        if (this.props.secondProps.address === "MANAGER_updateAnimals") {
            send = {
                animalNumber: this.state.animalNumber,
                actionType: this.props.secondProps.actionType,
                id: this.props.secondProps.id,
                itemName: this.props.secondProps.itemName,
                secondID: this.props.secondProps.secondID,
            };
        } else if (this.props.secondProps.address === "MANAGER_updateEggs") {
            send = {
                animalNumber: this.state.animalNumber,
                id: this.props.secondProps.id,
                eggCondition: this.props.secondProps.eggCondition,
                eggOf: this.props.secondProps.eggOf,
            };
        }

        // console.log(send);
        // console.log(this.props.secondProps);
        await axios.post("/" + this.props.secondProps.address, send).then((response) => {
            console.log(response.data);

            // console.log(this.state.data);
        });
    };

    componentDidMount() {
        // console.log(this.props);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <TextField
                    required
                    type="number"
                    InputProps={{ inputProps: { min: 0 } }}
                    className="field"
                    variant="outlined"
                    label="Chickens"
                    name="animalNumber"
                    defaultValue={this.state.animalNumber}
                    onChange={(e) => this.handleChange(e)}
                />
                <br />
                <br />
                <Button type="submit" variant="outlined" color="primary">
                    Submit
                </Button>
            </form>
        );
    }
}

export default AddForm;
