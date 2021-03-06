import React, { Component } from 'react';
import './App.css';
import chars from "./chars";
import Jumbotron from "./components/Jumbotron"
import CharCard from "./components/CharCard";
import Footer from "./components/Footer";

class App extends Component {
    state = {
        chars,
        clickedCharIds: [],
        score: 0,
        status: ""
    };

    // Shuffle the pup cards in the browser when clicked
    shuffleCards = id => {
        let clickedCharIds = this.state.clickedCharIds;

        // If the clicked array contains the id of the clicked card ==> Game Over!!
        if(clickedCharIds.includes(id)){
            this.setState({ clickedCharIds: [], score: 0, status:  "Game Over! You lost. Click to play again!" });
            return;
        }else{
            // If the id is not in the array, add it
            clickedCharIds.push(id);

            // if all the cards have been clicked without repetition ==> You Win!!
            if(clickedCharIds.length === 12){
                this.setState({score: 12, status: "You Won! Great Job!! Click to play again!", clickedCharIds: []});
                return;
            }
            // Shuffle
            this.setState({ chars, clickedCharIds, score: clickedCharIds.length, status: " " });
            for (let i = chars.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [chars[i], chars[j]] = [chars[j], chars[i]];
            }
        }
    };

    render() {
        return (
            <div>
                <Jumbotron
                    score={this.state.score}
                    status={this.state.status}
                />
                <div className="container">
                    <div className="row">
                        {this.state.chars.map(char => (
                            <CharCard
                                shuffleCards={this.shuffleCards}
                                id={char.id}
                                key={char.id}
                                image={char.image}
                            />
                        ))}
                    </div>
                    <div className="push">

                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
