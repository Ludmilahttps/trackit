import React from 'react'
import styled from "styled-components"


function HabitTracker(){
    return(
        <HabitFeed>
            <p>HabitTracker</p>
        </HabitFeed>
    )
}

export default HabitTracker

const HabitFeed = styled.div 
`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #E5E5E5;
`