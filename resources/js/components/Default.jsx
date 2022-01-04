import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Container from "@mui/material/Container";




export default function Default() {
    
    return (
        <div style={{ backgroundColor: "rgb(238, 238, 238)" }}>
            <Navbar />
            {/* <CssBaseline /> */}
            <Carousel className="mt-0 mb-5" style={{ width: "75%" }} />
            <Container maxWidth="xl mt-5">
                <div className="row justify-content-between pb-5 m-5">
                    <Card
                        imgLocation={
                            "./images/Front_Page/broiler-chicken-eggs.jpg"
                        }
                        header={"Chicken Eggs (Broiler)"}
                        description={
                            "Eggs are often referred to as nature's perfect food, because they carry all eight essential amino acids, as well as vitamins A, B12, D, and E for only 75 calories."
                        }
                        price={"99 per dozen"}
                    />
                    <Card
                        imgLocation={
                            "./images/Front_Page/deshi-chicken-eggs.jpg"
                        }
                        header={"Chicken Eggs (Deshi)"}
                        description={
                            "Eggs are often referred to as nature's perfect food, because they carry all eight essential amino acids, as well as vitamins A, B12, D, and E for only 75 calories."
                        }
                        price={"210 per dozen"}
                    />
                    <Card
                        imgLocation={"./images/Front_Page/duck-eggs.jpeg"}
                        header={"Duck Eggs"}
                        description={
                            "Eggs are often referred to as nature's perfect food, because they carry all eight essential amino acids, as well as vitamins A, B12, D, and E for only 75 calories."
                        }
                        price={"190 per dozen"}
                    />
                </div>

                <div className="row justify-content-between pb-5 mb-5 m-5">
                    <Card
                        imgLocation={"./images/Front_Page/broilerChicken.jpg"}
                        header={"Chicken (Broiler)"}
                        description={
                            "A broiler is any chicken that is bred and raised specifically for meat production. Most commercial broilers reach slaughter weight between four and seven weeks of age, although slower growing breeds reach slaughter weight at approximately 14 weeks of age."
                        }
                        price={"160 per kg"}
                    />
                    <Card
                        imgLocation={"./images/Front_Page/deshi-chicken.jpg"}
                        header={"Chicken (Deshi)"}
                        description={
                            "The chicken (Gallus gallus domesticus) is a type of domesticated fowl, a subspecies of the red junglefowl (Gallus gallus). Chickens are one of the most common and widespread domestic animals"
                        }
                        price={"549 per kg"}
                    />

                    <Card
                        // imgLocation={"https://st4.depositphotos.com/6055006/20992/i/1600/depositphotos_209929998-stock-photo-white-domestic-duck-isolated-white.jpg"}
                        imgLocation={"./images/Front_Page/duck.jpg"}
                        header={"Duck"}
                        description={
                            "Cows are members of the sub-family 'Bovinae' of the family 'Bovidae'. This family also includes Gazelles, Buffalo, Bison, Antelopes, Sheep and Goats."
                        }
                        price={"419 per kg"}
                    />

                    {/* <Card
                        imgLocation={"./images/Front_Page/deshi-chicken.jpg"}
                        header={"Chicken (Deshi)"}
                        description={
                            "The chicken (Gallus gallus domesticus) is a type of domesticated fowl, a subspecies of the red junglefowl (Gallus gallus). Chickens are one of the most common and widespread domestic animals"
                        }
                    /> */}
                </div>

                {/* <div className="w-75 row justify-content-between pb-5 mb-5 m-5">
                    <Card
                        imgLocation={"./images/Front_Page/fresh-cow-milk.jpg"}
                        header={"Cow Milk"}
                        description={
                            "Cows' milk is a nutrient-dense food consisting of varying amounts of carbohydrate, fat, and protein"
                        }
                    />
                </div> */}
            </Container>
            <Footer />

            
        </div>
    );
}
