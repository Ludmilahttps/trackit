import styled from "styled-components"

export const Header = styled.div
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
    margin-right: 25px;

`
export const LogoImg = styled.img
`
    width: 97px;
    height: 49px;

`
export const Footer = styled.div
`
    position: fixed;
    bottom: 0; left: 0;
    width: 100%;
    height: 70px;
    background-color: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 35px;
`
