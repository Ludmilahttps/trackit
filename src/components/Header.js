import React from 'react'
import styled from "styled-components"
import UserContext from '../UserContext'
import { useContext} from "react";


function Header(){
    const { info } = useContext(UserContext)
    return(
        <Head data-test="header">
                <LogoImg src="../../assets/TrackIt.svg"/>
                <UserImg src={info.image}/>
        </Head>
    )
}

export default Header

export const Head = styled.div
`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    position: fixed;
    top: 0; left: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
`

export const UserImg = styled.img
`
    width: 51px;
    height: 51px;
    border-radius: 100%;
    object-fit: cover;

`
export const LogoImg = styled.img
`
    width: 97px;
    height: 49px;

`