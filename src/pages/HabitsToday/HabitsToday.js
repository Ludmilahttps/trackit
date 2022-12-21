import { TodayHabitsScreen, HabitBox } from "./style"
import React from 'react'
import UserContext from '../../UserContext.js'
import axios from "axios"
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import { URL } from "../../constants/urls"

function HabitsToday() {
    dayjs.extend(advancedFormat);
    const data = dayjs().format('DD/MM')
    //console.log(data)

    const { info, todayData, setTodayData, percent, setPercent, habits, setHabits } = useContext(UserContext)
    const [update, setUpdate] = useState("")
    let dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let day = ""
    for (let i = 0; i < dayOfWeek.length; i++) {
        day = dayOfWeek[dayjs().day()]
    }
    //console.log(day)

    //console.log(todayData)
    //console.log(habits)
    const { token } = info
    const config = { headers: { "Authorization": `Bearer ${token}` } }

    useEffect(() => {
        const config = { headers: { Authorization: `Bearer ${info.token}` } }

        axios.get(`${URL}/habits/today`, config)
            .then(resp => {
                setTodayData(resp.data)
            })
            .catch(error => {
                //alert(error)
            })
    }, [update])

    let done = 0
    for (let i = 0; i < todayData.length; i++) {
        if (todayData[i].done)
        { 
            done += 1
            setPercent((done / todayData.length) * 100)
        }
    }

    return (
        <TodayHabitsScreen>
            <Header />
            <h1>{day}, {data}</h1>
            {done === 0 ? <p>No habits completed yet</p> : <p>{parseInt(percent)}% of housing completed</p>}

            {todayData.map((habit) => <HabitToday key={habit.id} setUpdate={setUpdate} update={update} habit={habit} />)}

            <Footer percent={percent} />
        </TodayHabitsScreen>
    )
}

function HabitToday(props) {
    const { info } = useContext(UserContext);
    let aux = ""
    console.log(aux)

    function HabitReady() {
        if (props.habit.done) {
            const config = { headers: { Authorization: `Bearer ${info.token}` } }
            axios.post(`${URL}/habits/${props.habit.id}/uncheck`, {}, config)
                .then(() => {
                    if (props.update === "change") {
                        aux = "AnotherChange"
                    } else {
                        aux = "change"
                    }
                })
        } else {
            const config = { headers: { Authorization: `Bearer ${info.token}` } }
            axios.post(`${URL}/habits/${props.habit.id}/check`, {}, config)
            .then(() => {
                if (props.update === "change") {
                    aux = "AnotherChange"
                } else {
                    aux = "change"
                }
            })
        }
        console.log(aux)
        useEffect(() => {
            props.setUpdate(aux)
        }, []);
    }
    return (
        <HabitBox done={props.habit.done} currentSequence={props.habit.currentSequence} highestSequence={props.habit.highestSequence}>
            <div>
                <h1>{props.habit.name}</h1>
                <h2>Current sequence: <h4>{props.habit.currentSequence} {props.habit.currentSequence === 1 ? 'dia' : 'dias'}</h4></h2>
                <h2>Your record: <h5>{props.habit.highestSequence} {props.habit.currentSequence === 1 ? 'dia' : 'dias'}</h5></h2>
            </div>
            <button color={props.habit.done} onClick={HabitReady}>
                <ion-icon name="checkmark-outline"></ion-icon>
            </button>
        </HabitBox>
    )
}

export default HabitsToday