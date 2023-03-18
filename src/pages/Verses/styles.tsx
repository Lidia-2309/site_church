import styled from "styled-components";
interface PageContainerProps {
  theme?: boolean;
}

export const createGlobalStyle = styled.div`
    * {
        margin: 0;
        outline: 0;
        transition: 0.1s;
    } 
    .container {
        margin: auto;
        width: 50%;        
        padding: 10px;
        text-align: center;        
    }
    body {
        background: ${(props) => props.theme.background};
        color: ${props => props.theme.text};        
    }
    h1 {
        color: ${props => props.theme.titles};        
    }
    .accent {
        background-color: ${props => props.theme.accent};
        color: ${props => props.theme.text};
        height: 30px;
    }
`;

export const StyleVerses = styled.div<PageContainerProps> `
    background-color: ${props => (props.theme ? 'black' : 'white')};
    border-radius: 3px;
    box-shadow: 1px 0px 2px 2px rgb(0 0 0 / 59%);
    padding: 2rem 2rem 2rem 2rem;
    margin: 2rem 2rem 2rem 2rem;
    align-items: center;
    display: flex;
    flex-direction: column;
    
    h3{
        color: ${props => (props.theme ? 'white' : 'black')};
        display: flex;
        justify-content: center;
        padding-right: 20px;
        padding-bottom: 30px;
    }
    .title-toogle {
        display: flex;
    }
    .toogle{
        display:flex;
        justify-content:space-evenly;   
    }
    .number{
        font-weight: bold;
        margin-right: 5px;
    }

    .versiculos{
        justify-content: space-between;
        color: ${props => (props.theme ? 'white' : 'black')};
    }

    span{
        padding-right: 20px;
    }
`;

export default StyleVerses

export const Loading = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width: 100vw;
    height: 100vh;
`;

