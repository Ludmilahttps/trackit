import { Header, UserImg, LogoImg, Footer } from "./style"
import React from 'react'
import { BallTriangle, Grid } from 'react-loader-spinner'
import UserContext from '../../UserContext.js'
import axios from "axios"
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
//import dayjs from 'dayjs'

function HabitsToday(){
    const { info, todayData, setTodayData, percent, setPercent, sidebar, setSidebar } = useContext(UserContext)
    const [changeHabit, setChangeHabit] = useState()
    const [iconButton, setIconButton] = useState(true)
    const [load, setLoad] = useState(0)
    console.log(info)
    const goTo =  useNavigate()
    //const now = dayjs().locale('pt-br')
    const { token } = info
    const config = { headers: {"Authorization": `Bearer ${token}`} }
    //console.log(userImg) visible={visible ? 1 : 0}
/*
    useEffect(() => {
        if (info.length === 0) {
            goTo("/");
        }
        if (token !== undefined) {
           
            const response = axios.get(`${URL}/habits/today`, config);

            response.then(({ data }) => {
                setTodayData(data)
                setLoad(1)
                if (data.length === 0) {
                    setPercent(0)
                } else {
                    const aux = data.filter((item) => item.done === true)
                    setPercent((aux.length / data.length) * 100)
                }
            }).catch("Here")
        }
    }, [changeHabit])*/

    return(

        <>
            <Header >
                <LogoImg src="../../assets/TrackIt.svg"/>
                <UserImg src={info.image}/>
            </Header>
            <Footer>

            </Footer>
            <p>HabitsToday</p>
        </>
    )
}

export default HabitsToday