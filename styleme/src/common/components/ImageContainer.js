import styled from 'styled-components';
import React from 'react';

export const ImageContainer = styled.div`
display:flex;
position:relative;
margin:8vw;
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

function getWidthString(span) {
    if (!span) return;
    let width = span / 12 * 100;
    return `width: ${width}%; `;
}

const Img = styled.img`
src:${props => props.src};
width:100%;
z-index:1;
`;

export const addImage = (imageName) => () => <Img src={imageName}></Img>

















































































































































































































