import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  .div_layout{
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
  }

  h4{
    font-family: 'Rosarivo',serif !important;
    font-style: italic;
    font-weight: 300;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    margin-bottom: 60px;
    margin-right: 35px;
    margin-left: 35px;
  }


  h1{
    font-family: 'Rosarivo', serif !important;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 56px;
  }

  .line{
    margin-bottom: 50px;
    width: 45vw;
    border-top: 0.5px solid #ffffff;
  }

  button{
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 182px;
    height: 46px;
    left: 538px;
    top: 840px;
    border:none;
    background: #4A6B7C;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    :hover{
      background: #3c5764;
      cursor: pointer;
    }
  }

  .BiLogInCircle {
    font-size: 20px;
    margin-right: 10px; /* adiciona 10px de espaço à direita do elemento */
  }

`;


export const FullscreenImage = styled.div`
overflow-y: hidden;
  background-image: url(assets/fundo.png);
  background-size: cover;
  height:100vh;
  width: 100vw;
  margin: 0;
  padding: 0;


  @media (min-width: 413px) and (max-width: 884px){
    background-image: url(assets/fundoTablet.png);
  }

  @media (max-width: 412px) {
    background-image: url(assets/fundoCelular.png);
  }
`;
