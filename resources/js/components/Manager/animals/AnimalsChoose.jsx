import React, { Component } from "react";
import "./animalsChoose.css";


class AnimalsChoose extends React.Component {
    state = {
        activeList: 1,
    };

    changeAchtiveness = (index) => {
        this.setState({ activeList: index });
        this.props.onChange(index);
    };

    render() {
        return (
            <>
                <div className="cards">
                    <div
                        className="cardElement"
                        onClick={() => this.changeAchtiveness(2)}
                    >
                        <div className="cardTitle">Chicken</div>

                        <img
                            src="./images/chickenPIC.jpg"
                            // src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/245952972_3123387614610066_889317661409462267_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=YWepyM1fdhQAX-SAlEk&_nc_oc=AQlwNazOaFDQv_4FmM1EWGdY4AqQ9J05tSZrNH3o3bNlPmP1VoNYCZYR7qwBKlsDKKM&_nc_ht=scontent.fdac41-1.fna&oh=00_AT-Mg7UtUO_ei6jh6tKHHynUzny_5U7138RWgUR1Fvi1BQ&oe=61D4C662"
                            alt="Unable To Load Image"
                            width="400"
                            height="400"
                        />
                        <table className="table mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">Chicken Type</th>
                                    <th scope="col">Total Number</th>
                                    <th scope="col">Eggs</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Broiler</td>
                                    <td>150</td>
                                    <td>1000</td>
                                </tr>
                                <tr>
                                    <td>Deshi</td>
                                    <td>85</td>
                                    <td>256</td>
                                </tr>
                                <tr>
                                    <td>Pakisthani</td>
                                    <td>98</td>
                                    <td>125</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div
                        className="cardElement"
                        onClick={() => this.changeAchtiveness(3)}
                    >
                        <div className="cardTitle">Duck</div>
                        <img
                            src="./images/duckPIC.jpg"
                            alt="Unable To Load Image"
                            width="325"
                            height="400"
                        />

                        <table className="table mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">Duck Type</th>
                                    <th scope="col">Total Number</th>
                                    <th scope="col">Eggs</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Deshi</td>
                                    <td>85</td>
                                    <td>111</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
}

export default AnimalsChoose;
