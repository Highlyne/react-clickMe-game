import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Container from './components/Container';
import pups from "./pups.json";

class App extends Component {
  state = {
    pups
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
          {this.state.pups.map(pup => (
            <Container
              id={pup.id}
              image={pup.image}
              name={pup.name}
            />
        ))}
      </div>
        );
      }
    }
    
    export default App;
