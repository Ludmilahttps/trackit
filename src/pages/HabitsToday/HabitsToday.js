import { TodayHabitsScreen, HabitBox } from "./style"
import React from 'react'
import { BallTriangle, Grid } from 'react-loader-spinner'
import UserContext from '../../UserContext.js'
import axios from "axios"
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
//import dayjs from 'dayjs'

function HabitsToday() {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    today.toDateString()
    today.toLocaleDateString()
    console.log(today)

    const { info, todayData, setTodayData, percent, setPercent, sidebar, setSidebar } = useContext(UserContext)
    const [changeHabit, setChangeHabit] = useState()
    const [iconButton, setIconButton] = useState(true)
    const [load, setLoad] = useState(0)
    console.log(info)
    const goTo = useNavigate()
    //const now = dayjs().locale('pt-br')
    const { token } = info
    const config = { headers: { "Authorization": `Bearer ${token}` } }
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

        function toggleHabit(id, done) {
            if (id !== null) {
                if (done) {
                    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
                    const requisition = axios.post(URL, {}, config);
    
                    requisition.then(() => {
                        setChangeHabit(Math.random())
                        const aux = todayData.filter((item) => item.done === true)
                        setPercent((aux.length / todayData.length) * 100)
                        setIconButton(true);
    
                    })
                        .catch((err) => alert("houve um erro ao desmarcar o hábito." + err.response.status))
                } else {
                    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
                    const requisition = axios.post(URL, {}, config);
    
                    requisition.then(() => {
                        setChangeHabit(Math.random())
                        const aux = todayData.filter((item) => item.done === true)
                        setPercent((aux.length / todayData.length) * 100)
                        setIconButton(true);
                    })
                        .catch((err) => alert("houve um erro ao marcar o hábito como feito." + err.response.status))
                }
            }
        }

    return (
        <>
            {todayData.map((item, key) =>
                <HabitBox background-color="#8FC549" record={item.highestSequence >= item.currentSequence} recordplus={item.highestSequence} key={key}>
                    <div className="habit-text">
                        <h2>{item.name}</h2>
                        <div className="subtitle">
                            <h3> Current sequence: 
                                <span className="first">
                                    {item.currentSequence > 1 ?`${item.currentSequence} dias`: item.currentSequence === 1 ? `${item.currentSequence} dia` :`0`}
                                </span>
                            </h3>
                            <h3>Your record: 
                                <span className="second">
                                    {item.highestSequence > 1 ?`${item.highestSequence} dias` : item.highestSequence === 1 ? `${item.highestSequence} dia` : `0`}
                                </span>
                            </h3>
                        </div>
                    </div>
                    <div className="habit-check" > {iconButton ? <ion-icon name="checkbox" onClick={() => {setIconButton(false); toggleHabit(item.id, item.done)}}></ion-icon> : <ion-icon name="checkbox"></ion-icon>}</div>
                </HabitBox>
            )}
        </>
    )
}

export default HabitsToday


/*
    <>
        <Header />
        <TodayHabitsScreen>

        </TodayHabitsScreen>
        <Footer />
    </>

*/