import styled from "styled-components"

export const New = styled.div
    `
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-context: center;
    margin-top: 25%;
    flex-direction: column;
    > img {
        width: 180px;
        height: 178.38px;
        margin-bottom: 40px;
    }
    > input {
        width: 303px;
        height: 45px;
        box-sizing: border-box;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin: 3px;
        cursor: pointer;
    }
    > button {
        width: 303px;
        height: 45px;
        box-sizing: border-box;
        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 20.976px;
        text-align: center;
        color: #FFFFFF;
        margin: 3px;
        cursor: pointer;
        align-items: center;
        justify-context: center;
    }
    > a {
        width: 303px;
        height: 45px;
        box-sizing: border-box;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
        margin: 22px;
        cursor: pointer;
    }
`