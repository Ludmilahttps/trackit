import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import UserContext from '../UserContext'
import { useContext } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'

function Footer({ percent }) {
    const { info } = useContext(UserContext)
    return (
        <Foot >
            <Link to="/habit">
                <p>Habits</p>
            </Link>
            <Circle>
                <Link to="/today">
                    <CircularProgressbar value={Math.round(percent)}
                        text={`Today`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({ backgroundColor: "#52B6FF", textColor: "#fff", pathColor: "#fff", trailColor: "transparent" })}
                    />
                </Link>
            </Circle>
            <Link to="/historic">
                <p>Historic</p>
            </Link>
        </Foot>
    )
}

export default Footer

export const Foot = styled.footer
    `
    background-color: #FFF;
    position: fixed;
    width: 100%;
    height: 70px;
    bottom: 0; 
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 35px;
    padding-right: 35px;
    > a {
        text-decoration: none;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;

        color: #52B6FF;

    }
`

const Circle = styled.div
    `
    position: fixed;
    width: 91px;
    height: 91px;
    bottom: 10px; 
    left: 50%;
    transform: translateX(-50%);
`