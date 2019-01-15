import React, { Component } from "react";
import "./Jumbotron.css";

class Jumbotron extends Component {
    render () {
        return (
            <header className = "header">
                <h1>SouthPark Clicky Game!</h1>
                <h2>Click on any image to earn a point, but don't click on the same picture more than once. Click all 12 pics, and you win.</h2>
                <h2>Score: {this.props.score}</h2>
                <h2>Status: {this.props.status}</h2>
            </header>
        );
    }
}
export default Jumbotron;