import styled from "styled-components"


export const TodayHabitsScreen = styled.div
`
    background-color: #F2F2F2;
    position: fixed;
    width: 100%;
    height: 100%;
    padding: 28px 18px 0 18px;
    > h1 {
        font-family: 'Lexend Deca';
        font-size: 23px;
        color: #126BA5;
        margin-bottom: 17px;
    }
    > p {
        font-family: 'Lexend Deca';
        font-size: 18px;
        color: #666666;
    }
`


export const HabitBox = styled.div` 
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px;
    font-family: 'Lexend Deca';
    .habit-check {
        max-width: 75px;
        max-height: 75px;
        /* margin-right: 25px; */
        display: flex;
        align-items: center;
        justify-content: center;
    }
    ion-icon {
        font-size: 7em;
        color: white;
        border-radius: 5px;
    }
    .habit-text {
        width: 300px;
        min-width: 50%;
        margin-right: 5px;
    }
    h2 {
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 7px;
        word-wrap: break-word;
    }
    h3 {
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
    }
    .first {
        color: black;
    }
    .second {
        color: black;
    }
`
