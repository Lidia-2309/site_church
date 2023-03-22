import styled from "styled-components";
interface PageContainerProps {
  theme?: boolean;
}

export const StyleVerses = styled.div<PageContainerProps> `
    background-color: ${props => props.theme.colors.background};
    border-radius: 3px;
    box-shadow: 1px 0px 2px 2px rgb(0 0 0 / 59%);
    padding: 2rem 2rem 2rem 2rem;
    margin: 2rem 2rem 2rem 2rem;
    align-items: center;
    display: flex;
    flex-direction: column;
    
    h3{
        color: ${props => props.theme.colors.text};
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
        color: ${props => props.theme.colors.text};
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

