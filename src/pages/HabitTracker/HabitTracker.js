import styled from 'styled-components'
import { HabitsScreen } from "./style"
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import UserContext from '../../UserContext'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import HabitsList from '../../components/HabitsList'
import Dialog from '../../components/Dialog'


function HabitTracker() {

    const navigate = useNavigate();
    const { info, habits, setHabits, percent, sidebar} = useContext(UserContext)
    const { token } = info;

    useEffect(() => {
        if (info.length === 0) {
            navigate("/");
        }
    }, [info])

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const [days, setDays] = useState([{
        day: 'D',
        selected: false
    },
    {
        day: 'S',
        selected: false
    },
    {
        day: 'T',
        selected: false
    },
    {
        day: 'Q',
        selected: false
    },
    {
        day: 'Q',
        selected: false
    },
    {
        day: 'S',
        selected: false
    },
    {
        day: 'S',
        selected: false
    },
    ])

    return (
        <HabitsScreen>
            <Header />
            <h1>My habits</h1>
            <p>You don't have any habits registered yet. Add a habit to start tracking!</p>
            <Footer percent={percent} />
        </HabitsScreen>
    )
}

export default HabitTracker