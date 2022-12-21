import React from 'react'
import { HistoricScreen } from './style'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../UserContext'

function Historic(){
    const { percent } = useContext(UserContext)

    return(
        <HistoricScreen>
            <Header />
            <h1>Historic</h1>
            <p>Soon you will be able to see the history of your habits here!</p>
            <Footer percent={percent} />
        </HistoricScreen>
    )
}

export default Historic