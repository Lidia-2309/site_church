import React from 'react';
import styled from 'styled-components';

<link href="https://fonts.googleapis.com/css2?family=Asul&display=swap" rel="stylesheet"></link>

export const Body = styled.body`
    
   div{
        position: fixed;
        display: flex;
        left: 0;
        right: 0;
        top: 0;
        height: 110px;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
        z-index: 10;
        background-color: #365B6D;
   }

.navbar {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative; 
}

.navbar img, .navbar h3 {
    float: left;
}

img {
  transform: scale(0.1);
  margin-inline-start: -70vh;
}

h3 {
  color: white;
  font-family: 'Asul', sans-serif;
  letter-spacing: 1px;
  text-indent: -70vh;
}


@media (max-width: 1020px) {

  nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  text-align: center;
}

img {
  display:flex;
  max-width:100%;
  margin: 0 auto;
  transform: none;
  height: 110px;
}


  h3 {
    display: none; /* esconde o título */
  }
}

`;








