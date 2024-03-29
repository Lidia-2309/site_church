import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
  } from 'reactstrap';
import { NavBarHomeStyles } from "./style";

import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineClose } from 'react-icons/md'
import { Navigate, useNavigate } from "react-router-dom";


const NavbarHome = (args:any) => {

    const [type, setType] = useState<string>("");
    const [showMenu, setShowMenu] = useState(false);
    const toggle = () => setShowMenu(!showMenu);

    const handleClickIcon = () => {
        //navigate("/")
        setShowMenu(!showMenu);
    }

    const navigateBible = useNavigate();

    const handleClickBiblia = (value:string) => {
        navigateBible("/biblia",{
            state: {
                type: value
            }
        })
    }

    return (
        <NavBarHomeStyles>
            <Navbar
                className="my-2"
                id="navbar"
                dark
            >
                <NavbarBrand href="/">
                <img
                    alt="logo"
                    src="assets/logoBranca.png"
                />
                </NavbarBrand>
                    <Nav className="me-auto" navbar>
                        <div className="navText">
                        <NavItem className="navItem">
                            <NavLink href="/">QUEM SOMOS</NavLink>
                        </NavItem>
                        <NavItem className="navItem">
                            <NavLink href="/">
                                LOCALIZAÇÃO
                            </NavLink>
                        </NavItem >
                        <NavItem className="navItem">
                            <NavLink href="/">
                                NO QUE CREMOS
                            </NavLink>
                        </NavItem >
                        <UncontrolledDropdown>
                            <DropdownToggle className="prog" nav caret>
                                PROGRAMAÇÕES
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Todas</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Casais</DropdownItem>
                                <DropdownItem>Jovens</DropdownItem>
                                <DropdownItem>Crianças</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        </div>
                    </Nav>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={showMenu} navbar>
                    <div className="menu-lateral">
                        <MdOutlineClose className="iconClosed" onClick={handleClickIcon} ></MdOutlineClose> 
                        <UncontrolledDropdown>
                            <DropdownToggle nav caret>
                                BÍBLIA
                            </DropdownToggle>
                            <DropdownMenu className="DropMenuBible"right>
                                <DropdownItem onClick={() => handleClickBiblia("AT")}>Antigo Testamento</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={() => handleClickBiblia("NT")}>Novo Testamento</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </Collapse>
            </Navbar>
        </NavBarHomeStyles>
    );
};

export default NavbarHome

{/* <div className="divBody">
        <nav className="navbar">
            <img src="assets/logoBranca.png" alt=""></img>
            <div className="div_a">
                <a href="/" className="quemsomos">QUEM SOMOS</a>
                <a href="/" className="localizacao">LOCALIZAÇÃO</a>
                <a href="/" className="cremos">NO QUE CREMOS</a>
                <a href="/" className="programacoes">PROGRAMAÇÕES</a> 
                <GiHamburgerMenu className="iconMenu" onClick={handleClickIcon} onBlur={() => setShowMenu(false)}></GiHamburgerMenu>  
            </div>
            </nav>
            {showMenu && 
                <div className="menu-lateral">
                    <MdOutlineClose className="iconClosed" onClick={handleClickIcon} ></MdOutlineClose>
                    <a href="/bibliaAT" className="menu-text">BÍBLIA</a>
                </div>
            }
        </div> */}