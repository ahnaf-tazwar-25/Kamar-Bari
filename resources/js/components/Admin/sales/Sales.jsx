import React, { Component } from "react";
import Card from "./SalesCard";
import "./sales.css";
import axios from "axios";

class Sales extends React.Component {
    state = {
        loadChart: 0,
        animalPrices: [],

        broierEggPrice: null,
        deshiEggPrice: null,
        duckEggPrice: null,
        broilerPrice: null,
        deshiPrice: null,
        duckPrice: null,
    };

    changeLoadChart = (index) => {
        this.setState({ loadChart: index });
    };

    async loadAnimalPrices() {
        await axios
            .get("/CEO_getAnimalPrice")
            .then((response) => {
                this.setState({ animalPrices: response.data.animalPrices });
                this.setState({
                    broierEggPrice: this.state.animalPrices[0].price,
                    deshiEggPrice: this.state.animalPrices[1].price,
                    duckEggPrice: this.state.animalPrices[2].price,
                    broilerPrice: this.state.animalPrices[3].price,
                    deshiPrice: this.state.animalPrices[4].price,
                    duckPrice: this.state.animalPrices[5].price,
                });
            })
            .catch((error) => {
                alert("This was the error:\n" + error);
            });
    }

    componentDidMount() {
        // this.loadAnimalPrices();
    }

    render() {
        return (
            <div className="container-fuid m-5">
                <div className="row justify-content-between">
                    <Card
                        imgLocation={
                            "./images/Front_Page/broiler-chicken-eggs.jpg"
                        }
                        header={"Chicken Eggs (Broiler)"}
                        priceUnit={" Dozen"}
                        itemName={"cEggBroiler"}
                        index={0}
                        price={this.state.broierEggPrice}
                    />
                    <Card
                        imgLocation={
                            "./images/Front_Page/deshi-chicken-eggs.jpg"
                        }
                        header={"Chicken Eggs (Deshi)"}
                        priceUnit={" Dozen"}
                        itemName={"cEggDeshi"}
                        index={1}
                        price={this.state.deshiEggPrice}
                    />
                    <Card
                        imgLocation={"./images/Front_Page/duck-eggs.jpeg"}
                        header={"Duck Eggs"}
                        priceUnit={" Dozen"}
                        itemName={"dEgg"}
                        index={2}
                        price={this.state.duckEggPrice}
                    />
                </div>

                <div className="row justify-content-between mt-5">
                    <Card
                        imgLocation={"./images/Front_Page/chicken.jpg"}
                        header={"Chicken (Broiler)"}
                        priceUnit={" Kg"}
                        itemName={"cBroiler"}
                        index={3}
                        price={this.state.broilerPrice}
                    />
                    <Card
                        imgLocation={"./images/Front_Page/deshi-chicken.jpg"}
                        header={"Chicken (Deshi)"}
                        priceUnit={" Kg"}
                        itemName={"cDeshi"}
                        index={4}
                        price={this.state.deshiPrice}
                    />
                    <Card
                        imgLocation={"./images/Front_Page/duck.jpg"}
                        header={"Duck"}
                        priceUnit={" Kg"}
                        itemName={"d"}
                        index={5}
                        price={this.state.duckPrice}
                    />
                </div>
            </div>
        );
    }
}

export default Sales;
