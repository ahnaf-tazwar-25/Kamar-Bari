import React, { Component } from "react";
import "./conversations.css";

class Conversations extends React.Component {
    componentDidMount() {
        // console.log(this.props.selectedVal);
    }

    render() {
        return (
            <>
                {this.props.selectedVal.map((conversation, key) => (
                    <>
                        {this.props.sendID == conversation.senderID ? (
                            <div
                                key={key}
                                className="primaryText bubble bubble-bottom-left"
                            >
                                {conversation.body}
                            </div>
                        ) : (
                            <div key={key + 1} className="primaryText " align="right">
                                <div key={key + 2} className="bubbles bubble-bottom-right">
                                    {conversation.body}
                                </div>
                            </div>
                        )}
                    </>
                ))}

                {/* <div className="primaryText bubble bubble-bottom-left" >
                    Hello there! What is your name? Hello there! What is your
                    name? Hello there! What is your name? Hello there! What is
                    your name? Hello there! What is your name?
                </div>

                <div className="primaryText " align="right">
                    <div className="bubbles bubble-bottom-right">
                        My name is Ahnaf Tazwar
                    </div>
                </div>
                <div className="primaryText bubble bubble-bottom-left">
                    Hello there! What is your name? Hello there! What is your
                    name? Hello there! What is your name? Hello there! What is
                    your name? Hello there! What is your name?
                </div>

                <div className="primaryText " align="right">
                    <div className="bubbles bubble-bottom-right">
                        My name is Ahnaf Tazwar
                    </div>
                </div>
                <div className="primaryText " align="right">
                    <div className="bubbles bubble-bottom-right">
                        My name is Ahnaf Tazwar
                    </div>
                </div>
                <div className="primaryText " align="right">
                    <div className="bubbles bubble-bottom-right">
                        My name is Ahnaf Tazwar
                    </div>
                </div>
                <div className="primaryText " align="right">
                    <div className="bubbles bubble-bottom-right">
                        My name is Ahnaf Tazwar
                    </div>
                </div>
                <div className="primaryText bubble bubble-bottom-left">
                    Hello there! What is your name? Hello there! What is your
                    name? Hello there! What is your name? Hello there! What is
                    your name? Hello there! What is your name?
                </div> */}

            </>
        );
    }
}

export default Conversations;
