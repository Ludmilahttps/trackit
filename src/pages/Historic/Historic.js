import React from 'react'
import { HistoricScreen } from './style'
import Header from "../../components/Header"
import Footer from "../../components/Footer"

function Historic(){
    return(
        <HistoricScreen>
            <Header />
            <h1>Historic</h1>
            <p>Soon you will be able to see the history of your habits here!</p>
            <Footer />
        </HistoricScreen>
    )
}

export default Historic