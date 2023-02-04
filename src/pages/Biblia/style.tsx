import styled from "styled-components";

export const CenterContent = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .Vtestament, .Ntestament{
        
        position:absolute;
        margin-top: 5vh;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70vw;
        height: 10vh;
        background: #4A6B7C;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
    }
    .Vtestament {
        //left: 507px;
        top: 100px;
    }
    .Ntestament {
        top: 415px;
    }

    h2{
        font-size: 1.3rem;
        font-style: normal;
        font-weight: 700;
        line-height: 42px;
        font-family: 'Andika', sans-serif;
    }
    select{
        margin-right:5vw;
    }

    .VTSelect{
        top: 100px;
    }

    .NTSelect{
        top: 70vh;
    }
    .divButton{
        top:250px;
        position: absolute;
        align-items:center;
        justify-content:center;
        display:flex;
        flex-wrap: wrap;
        margin-left:5vh;
        margin-right:5vh;
        margin-top:1vh;
    }


`;

