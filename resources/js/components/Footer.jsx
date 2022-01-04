import React, { Component } from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer className="text-center text-lg-start bg-light text-muted">
                <section
                    // style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>

                    {/* <div >
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                    </div> */}
                </section>

                <section
                    style={{
                        backgroundColor: "rgba(70, 70, 70)",
                        color: "white",
                    }}
                >
                    <div className="container text-center text-md-start pt-2">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Khamar
                                    Bari
                                </h6>
                                <p>
                                    Khamar Bari is an online animals and animal
                                    products buying platform. You can buy our
                                    products at anytime from anywhere throughout
                                    the country.
                                </p>
                                <p>
                                    We offer 100% fresh products directly
                                    growing in our famrs.
                                </p>
                                <p>
                                    We don't sale any products that does belong
                                    to our farm. Feel free to buy with 100%
                                    fresh gurantee.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>Chicken Eggs</p>
                                <p>Duck Eggs</p>
                                <p>Chickens</p>
                                <p>Duck</p>
                                <p>Cow Milk</p>
                                <p>Cow</p>
                            </div>

                            {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Settings
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Orders
                                    </a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">
                                        Help
                                    </a>
                                </p>
                            </div> */}

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p>
                                    <i className="fas fa-home me-3"></i> New
                                    York, NY 10012, US
                                </p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p>
                                    <i className="fas fa-phone me-3"></i> + 01
                                    234 567 88
                                </p>
                                <p>
                                    <i className="fas fa-print me-3"></i> + 01
                                    234 567 89
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div
                    className="text-center p-4"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                >
                    © 2021 Copyright: &nbsp;
                    <a className="text-reset fw-bold" href="#">
                        khamarbari.com
                    </a>
                </div>
            </footer>
        );
    }
}

export default Footer;
