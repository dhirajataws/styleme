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
const Img = styled.img`
position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;`
    
const ShowPicture = (props) => {
  return (
    <div>
      <Img src={logo} />
      {props.children}
    </div>
  )
}

const Myimage = (props) => <h1>jjjjj </h1>

const addLogoName = (name) => {
  return (Component) => {
    return <ShowPicture name={name}>{Component}</ShowPicture>
  }
}
const withLogo = addLogoName("logo");

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Title>this</Title>
        {withLogo(<Myimage />)}
      </div>
    );
  }
}


export default App;
