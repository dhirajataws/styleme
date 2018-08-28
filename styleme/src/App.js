import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import tile from './tile.jpg';
import logo from './logo.png';


const Img = styled.img`
position: absolute;
    left: 0px;
    top: 0px;
    `
const ForgroundImg = styled.img`
    position: absolute;
        left: 0px;
        top: 0px;
        z-index: 1;
        opacity:0.5;
        `
const ShowPicture = (props) => {
  return (
    <div>
      <ForgroundImg src={logo} />
      {props.children}
    </div>
  )
}

const ForImage = (props) => <img src={tile} />
const addLogoName = (logo) => (Component) => <ShowPicture><Component /></ShowPicture>


const withLogo = addLogoName("logo");

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        {/* <ForImage /> */}
        {withLogo(ForImage)}
      </div>
    );
  }
}


export default App;
