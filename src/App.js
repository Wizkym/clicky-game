import React, { Component } from 'react';
import './App.css';
import chars from "./chars";
import Wrapper from "./components/Wrapper";
import Chars from "./components/Chars";

class App extends Component {
  state = {
    chars
  };

  shuffleCards = (id) => {
    console.log("THIS IS SHUFFLE", id);
  };

    render() {
        return (
            <Wrapper>
              <div className="row">
                  {this.state.chars.map(char=> (
                      <Chars
                          removeFriend={this.shuffleCards}
                          id={char.id}
                          key={char.id}
                          name={char.name}
                          image={char.image}
                          occupation={char.occupation}
                          location={char.location}
                      />
                  ))}
              </div>
            </Wrapper>
        );
    }
}

export default App;
