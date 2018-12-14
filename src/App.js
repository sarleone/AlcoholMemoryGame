import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import AlcoholCard from "./components/AlcoholCard";
import JumboT from './components/JumboT';
import alcohols from "./alcohols.json";

class App extends Component {
  state = {
    alcohols,
    count:1,
    topCount:0
  };

  shuffleCards = () => {
    let array = this.state.alcohols;
    let i = array.length -1,
    j = 0,
    temp;
    while(i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return this.setState({alcohols:array});
  };

  restartGame = () => {
    this.shuffleCards();
    this.state.alcohols.forEach(function(alcohol) {
      alcohol.clicked = false;
    });
    this.setState({count: 1});
    if (this.state.count > this.state.topCount) {
      this.setState({topCount: this.state.count});
    }
  }

  onClickHandler = id => {
    let found = this.state.alcohols.find(function(alcohol){
      return alcohol.id === id;
    })
    if (found.clicked){
      this.restartGame();
      alert("You don't have to go home but you can't win here.");
    } else {
      found.clicked = true;
      this.shuffleCards();
      this.setState({count: this.state.count +1});
      if (this.state.count === 12) {
        alert("You're my boy, Blue!");
        this.restartGame();
      }
    }
  }
  
  render() {
    return (
      <div>
        <NavBar count = {this.state.count} topCount ={this.state.topCount}/>
        <JumboT>
      <h1>Alcohol Memory Game</h1>
      <h2><i>Don't click the same bottle twice and you will go straight to winner town!</i></h2>
        </JumboT>
        <Wrapper>
          {this.state.alcohols.map((alcohol, i) => (
            <AlcoholCard
              onClickHandler={this.onClickHandler}
              id={alcohol.id}
              key={alcohol.id}
              image={alcohol.image}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
