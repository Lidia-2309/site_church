import NavbarInitial from "../../components/NavBarInitial";
import {FullscreenImage, Container}  from "./style";
import { BiLogInCircle } from 'react-icons/bi';

export const Home = () => {  
    return (
        <>
        <Container>
            <FullscreenImage>
                 <NavbarInitial></NavbarInitial> 
                 <div className="div_button">
                    <h4>“Respondeu Jesus: "Eu sou o caminho, a verdade e a vida. <br/>Ninguém vem ao Pai, a não ser por mim.” <br/>João 14:6</h4>
                    <h1>SEJA BEM VINDO</h1>
                    <div className="line"></div>
                    <button>
                        <BiLogInCircle className="BiLogInCircle"/>
                        IR PARA O SITE
                    </button>
                </div>
            </FullscreenImage>
        </Container>
      </>
        
    );
};

export default Home


