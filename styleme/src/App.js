import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import tile from './tile.jpg';
import logo from './logo.png';

const Img = styled.img`
display: block;
width:100%;
height:100%;
    `
const ForgroundImg = styled.img`
    position: absolute;
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

const ForImage = (props) => <Img src={tile} />
const addLogoName = (logo) => (Component) => <ShowPicture><Component /></ShowPicture>

const Row = styled.div`
&::after{
  content:",
  clearboth;
  display:table;
}
`;
const Column = styled.img`
display:block;
float:left;
width:100%;
height:100%;

src:${props => props.src};
`;
function getWidthString(span) {
  if (!span) return;
  let width = span / 12 * 100;
  return `width:${width}%;`;
}
// const withLogo = addLogoName("logo");
// class App extends Component {
//   render() {
//     return (
//       <div>
//         {withLogo(ForImage)}
//       </div>
//     );
//   }
// }


class App extends Component {
  render() {
    return (
      <div>
        <Column src={tile} />

      </div>
    );
  }
}
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         {withLogo(ForImage)}
//       </div>
//     );
//   }
// }


export default App;



// const Row = styled.div`
// &::after{
//   content:",
//   clearboth;
//   display:table;
// }
// `;
// const Column = styled.div`
// float:left;
// ${({ xs }) => (xs ? getWidthString(xs) : "width:100%")};

// @media only screen and (min-width:768px){
//   ${({ sm }) => sm && getWidthString(sm)};
// }
// @media only screen and (min-width:992px){
//   ${({ md }) => md && getWidthString(md)};
// }
// @media only screen and (min-width:1200px){
//   ${({ lg }) => lg && getWidthString(lg)};
// }
// `;
// function getWidthString(span) {
//   if (!span) return;
//   let width = span / 12 * 100;
//   return `width:${width}%;`;
// }


// export function Grid(props) {
//   return (
//     <div>
//       <Row>
//         <Column span="3">1</Column>
//         <Column span="1">2</Column>
//         <Column span="1">3</Column>
//         <Column span="1">4</Column>
//         <Column span="1">5</Column>
//         <Column span="1">6</Column>
//         <Column span="1">7</Column>
//         <Column span="1">8</Column>
//         <Column span="1">9</Column>
//         <Column span="1">10</Column>
//         <Column span="1">11</Column>
//         <Column span="1">12</Column>
//       </Row>
//     </div>
//   )
// }