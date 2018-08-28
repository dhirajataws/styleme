import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import tile from './tile.jpg';
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Div = styled.div`
width:200px;
height:200px;
z-index:-1;`
const ShowPicture = (props) =>
  <Div>
    {props.children}
  </Div>

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Title>this</Title>
        <ShowPicture><img src={tile} /></ShowPicture>
        hello
      </div>
    );
  }
}

export default App;
