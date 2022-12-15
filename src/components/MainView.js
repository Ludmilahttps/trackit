import React from 'react'
import styled from "styled-components"

function MainView(){
    return(
        <Main>
            <p>MainView</p>
            <img></img>
            <input type="name" name="name"/>
            <input type="password" name="password"/>
            <button></button>
            <a></a>
        </Main>
    )
}

export default MainView

const Main = styled.main 
`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-context: center;
    flex-direction: column;
    > input {
        width: 303px;
        height: 45px;
    }
    > button {
        width: 303px;
        height: 45px;
    }
    > a {
        width: 303px;
        height: 45px;
    }
`