import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import tile from './tile.jpg';
import logo from './logo.png';

const Basediv1 = styled.div`
display:flex;
position:relative;
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

const Basediv = styled.div`
display:flex;
position:relative;
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



// const Img = styled(BaseImg)`
// src:${props => props.src};
// display:flex;
// z - index: -1;
// `;

// const ForgroundImg = styled(BaseImg)`
// display:flex;
// z - index: 2;
// opacity: 0.5;
// `;
// const BottomDiv = styled(Basediv)`
// height:100px;
// width:100px;
// background-color:red;
// opacity:0.5;
// color:red;
// z - index: 2;

// `

const Bar = styled.div`
display:flex;
flow-direction:row;
justify-content:stretch;
position:absolute;
width:100%;
top:80%;
height:20%;
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
width:15%;
height:100%;
z-index:3;
`;
const Img = styled.img`
width:100%;
z-index:1;
`;
const ShowPicture = (props) => {
  return (
    <Basediv xs="6" lg="4">
      {/* {props.children} */}
      <Img src={tile} />
      <Bar><LogoImg src={logo} /><Text>Home and Away</Text></Bar>
    </Basediv>
  )
}
// const addLogoName = ({ logo, xs, md, sm, lg, tile }) => (Component) => <ShowPicture><Component xs={xs} md={md} cm={sm} lg={lg} src={tile} /></ShowPicture>

const addLogoName = ({ logo, xs, md, sm, lg, tile }) => (Component) => <ShowPicture><Component xs={xs} md={md} cm={sm} lg={lg} src={tile} /></ShowPicture>


function getWidthString(span) {
  if (!span) return;
  let width = span / 12 * 100;
  return `width: ${width}%; `;
}

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content:space-between;
`;

const withLogo = addLogoName({ logo, xs: "6", md: "4", sm: "6", lg: "4", tile });
class App extends Component {
  render() {
    return (
      <Container>
        {withLogo()}
        {withLogo()}
      </Container>
    );
  }
}


export default App;


// const ForImage = (props) => <Img src={tile} />

//src:${props => props.src};

// withLogo(<Column xs="12" md="4" sm="6" lg="4" src={tile}  >
// </Column>)
/* {/* <Container>
<img src={tile} />
  <img src={tile} />
          {/* <Row>
          <Column xs="12" md="8" xm="6" lg="2"  >
            <img src={tile} />
            <img src={tile} />
          </Column>
        // </Row> */

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


// const BaseImg = styled.img`
// display:flex;
// margin:5%;
// position: absolute;
// @media only screen and (min-width:320px){
//   ${({ xs }) => xs && getWidthString(xs)};
// }
// @media only screen and (min-width:768px){
//   ${({ sm }) => sm && getWidthString(sm)};
// }
// @media only screen and (min-width:992px){
//   ${({ md }) => md && getWidthString(md)};
// }
// @media only screen and (min-width:1200px){
//   ${({ lg }) => lg && getWidthString(lg)};
// }
// @media only screen and (min-width:1440px){
//   ${({ xl }) => xl && getWidthString(xl)};
// }
// `;