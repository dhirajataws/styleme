import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import tile from './tile.jpg';
import logo from './logo.png';

// margin:5%;

const Basediv = styled.div`
display:flex;
position:absolute;
padding:5px;
@media only screen and (min-width:320px){
  ${({ xs }) => xs && getWidthString(xs)};
}
@media only screen and (min-width:768px){
  ${({ sm }) => sm && getWidthString(sm)};
}
@media only screen and (min-width:992px){
  ${({ md }) => md && getWidthString(md)};
}
@media only screen and (min-width:1200px){
  ${({ lg }) => lg && getWidthString(lg)};
}
@media only screen and (min-width:1440px){
  ${({ xl }) => xl && getWidthString(xl)};
}
`;
const Img = styled.img`
width:100%;
z-index:1;
`;
const Bar = styled.div`
display:flex;
flow-direction:row;
justify-content:stretch;
position:absolute;
width:100%;
top:85%;
height:15%;
color:red;
background-color:black;
opacity:0.5;
z-index:2;
margin:-5;
`
const Text = styled.div`
display:flex;
font-size:30px;
margin:10px;
color:white;
opacity:1.5;
`
const LogoImg = styled.img`
width:20%;
height:100%;
z-index:3;

`

function getWidthString(span) {
  if (!span) return;
  let width = span / 12 * 100;
  return `width: ${width}%; `;
}

class App extends Component {
  render() {
    return (
      <div>
        <Basediv>
          <Img src={tile} />
          <Bar><LogoImg src={logo} /><Text>Home and Away</Text></Bar>
        </Basediv>
      </div>
    );
  }
}


export default App;

//<Bar><span><LogoImg src={logo} />Home and Away</span></Bar>
// const ForImage = (props) => <Img src={tile} />

//src:${props => props.src};

// withLogo(<Column xs="12" md="4" sm="6" lg="4" src={tile}  >
// </Column>)
{/* <Container>
          <img src={tile} />
          <img src={tile} />
          {/* <Row>
          <Column xs="12" md="8" xm="6" lg="2"  >
            <img src={tile} />
            <img src={tile} />
          </Column>
        </Row> */}

        // </Container > * /}

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

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         {withLogo(ForImage)}
//       </div>
//     );
//   }
// }
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
// const Row = styled.div`
// display:flex;

// `;
// const Column = styled.img`
// display:block;
// float:left;
// width:100%;
// height:100%;
//src:${props => props.src};

// 
// `;
