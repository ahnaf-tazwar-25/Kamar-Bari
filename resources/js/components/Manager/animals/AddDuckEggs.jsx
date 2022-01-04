import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

class AddForm extends React.Component {
    state = {
        animalNumber: this.props.secondProps.item,
    };

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        var send = {
            animalNumber: this.state.animalNumber,
            eggOf: this.props.secondProps.eggOf,
            eggCondition: this.props.secondProps.eggCondition,
            id: this.props.secondProps.id,
        };

        await axios.post("/MANAGER_updateEggs", send);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <TextField
                    required
                    type="number"
                    InputProps={{ inputProps: { min: 0 } }}
                    className="field"
                    variant="outlined"
                    label="Ducks"
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
