import React from 'react';
import styled from 'styled-components';

<link href="https://fonts.googleapis.com/css2?family=Asul&display=swap" rel="stylesheet"></link>

export const Body = styled.body`
    
.divBody{
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

.div_a{
    margin-inline-start: -10rem;
}

a{
    width: 1114px;
    height: 66px;
    left: 277px;
    top: 105px;
    margin: 18px;
    font-size: 20px;
    text-decoration: none;
    color: #FFFFFF;
    font-family: 'EB Garamond', serif;
}

.iconMenu, .iconClosed  {
    font-size: 20px;
    margin-left: 18px;
    color: white; 
    cursor: pointer;
  }

  .iconClosed {
    margin: 18px;
  }

.menu-lateral {
  position: fixed; /* posiciona a div fora do fluxo normal do documento */
  top: 0; /* posiciona a div no topo da tela */
  right: 0; /* posiciona a div no canto direito da tela */
  width: 300px; /* define o tamanho da div */
  height: 100%; /* define o tamanho da div */
  background-color: #17798a; /* define a cor de fundo */
  box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.3); /* adiciona sombra */
  z-index: 999; /* garante que a div fique acima de outros elementos */
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

}

`;








