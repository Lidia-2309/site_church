import React, { useState } from "react";
import { Body } from "./style";
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineClose } from 'react-icons/md'
import { useNavigate } from "react-router-dom";

const NavbarHome = () => {

    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const handleClickIcon = () => {
        //navigate("/")
        setShowMenu(!showMenu);
    }

    return (
        <Body>
        <div className="divBody">
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
                    <a href="/biblia" className="menu-text">BÍBLIA</a>
                </div>
            }
        </div>
        </Body>
    );
};

export default NavbarHome;
