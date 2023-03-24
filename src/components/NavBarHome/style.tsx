import React from 'react';
import styled from 'styled-components';

<link href="https://fonts.googleapis.com/css2?family=Asul&display=swap" rel="stylesheet"></link>

export const NavBarHomeStyles= styled.nav`

  #navbar {
    margin-top: 0rem!important;
    background-color: #4a6b7c !important;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
    z-index: 10;
  }
  .navbar-brand {
    color: white !important;
    font-family: 'EB Garamond', serif;
    letter-spacing: 1px;
    font-size:17px;
  }
  img {
    height: 80px !important;
    width: 80px !important;
    margin-left: 30px;
    margin-right: 30px;
  }
  .navText{
    display: flex;
    flex-direction: row !important;
  }
  a.nav-link {
    text-decoration:none;
    font-family: 'EB Garamond', serif;
    color:white;
    margin-left:25px;
    padding-left:10px;
    padding-right:10px;
    :hover{
      background-color: #3e5a69;
      border-radius:10px;
      font-style:bold;
    }
  }

  .prog{
    :hover{
      background-color: #3e5a69;
      border-radius:10px;
      font-style:bold;
    }
  }

  a.dropdown-toggle.nav-link{
    text-decoration:none;
    font-family: 'EB Garamond', serif;
    color:white;
    margin-left:25px;
    padding-left:10px;
    padding-right:10px;
  }

  button{
    border:none;
  }
  .navbar-toggler-icon{
    color:white !important;
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
    position: fixed; 
    top: 0; 
    right: 0; 
    width: 300px;
    height: 100%; 
    background-color: #17798a; 
    box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.3); 
    z-index: 999; 
}

.DropMenuBible{
  margin:-5px 110px 5px 4px
}

`;








