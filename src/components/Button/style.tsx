import styled from "styled-components";

export const ButtonStyleData = styled.div`
 .Button{
    height: 5vh !important;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5vh;
    border-color: #7db2cc;
    color: #4A6B7C;
    margin:5px;

    :hover{
        background-color: #4A6B7C;
        color: white;
        border-color: #4A6B7C;
    }
}

    @media(max-width:571px){
        .Button{
            height: 4vh !important;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5vh;
            border-color: #7db2cc;
            color: #4A6B7C;
            margin:5px;
    }
    }

`;