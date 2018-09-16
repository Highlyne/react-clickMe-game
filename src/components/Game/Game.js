import React, { Component } from 'react';
import Navbar from '../Navbar';
import Header from '../Header';
import Container from '../Container';
import ClickItem from "../ClickItem";
import pups from "../../pups.json";


class Game extends Component {
    state = {
        pups,
        score: 0,
        topScore: 0
    };

    componentDidMount() {
        this.setState({ pups: this.shuffleData(this.state.pups) });
      }

    shuffleData = pups => {
        let i = pups.length - 1;
        while (i > 0) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = pups[i];
          pups[i] = pups[j];
          pups[j] = temp;
          i--;
        }
        return pups;
      };
    
    handleCorrectGuess = newData => {
        const { topScore, score } = this.state;
        const newScore = score + 1;
        const newTopScore = newScore > topScore ? newScore : topScore;
        this.setState({
          pups: this.shuffleData(newData),
          score: newScore,
          topScore: newTopScore
        });
      };

    handleIncorrectGuess = pups => {
    this.setState({
        pups: this.resetData(pups),
        score: 0
    });
    };

    resetData = pups => {
    const resetData = pups.map(item => ({ ...item, clicked: false }));
    return this.shuffleData(resetData);
    };

    shuffleData = pups => {
    let i = pups.length - 1;
    while (i > 0) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = pups[i];
        pups[i] = pups[j];
        pups[j] = temp;
        i--;
    }
    return pups;
    };
    

    handleClickedPup = id => {
        let guessedCorrectly = false;
        const newData = this.state.pups.map(item => {
          const newItem = { ...item };
          if (newItem.id === id) {
            if (!newItem.clicked) {
              newItem.clicked = true;
              guessedCorrectly = true;
            }
          }
          return newItem;
        });
        guessedCorrectly
          ? this.handleCorrectGuess(newData)
          : this.handleIncorrectGuess(newData);
      };

    render() {
        return (
            <div>
                <Navbar score={this.state.score} topScore={this.state.topScore}/>
                <Header />
                <Container>
                
                    {this.state.pups.map(pup => (
                        <ClickItem
                            key={pup.id}
                            id={pup.id}
                            image={pup.image}
                            name={pup.name}
                            handleClick={this.handleClickedPup}
                        />
                    ))}
                </Container>
            </div>
        );
    }
}

export default Game;
