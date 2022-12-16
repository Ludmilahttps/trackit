import React from 'react'
import { Link } from "react-router-dom"
import { Form } from "./style"
import { URL } from "../../constants/urls"
import axios from "axios"
import { useState } from "react"
 
function MainView() {

    const [userEmail, setEmail] = useState('')
    const [userPassword, setPassword] = useState('')
    const [sentRequest, setSentRequest] = useState(false)

    function sendLogin(e) {
        e.preventDefault()
        setSentRequest(true)

        const post = {
            email: userEmail,
            password: userPassword
        }

        axios.post(`${URL}/login`, post)
        .then(resp => { <Link to="/habit" prop = {resp}></Link>})
        .catch(error => { console.error(error) })

    }

    //     email: "ludvieira125@hotmail.com",
    //     password: "12345"

    return (
        <Form>
            <img src="../../assets/logo.svg"></img>
            <input type="email" name="email" placeholder="email" disabled={sentRequest} onChange={(e) => setEmail(e.currentTarget.value)}/>
            <input type="password" name="password" placeholder="password" disabled={sentRequest} onChange={(e) => setPassword(e.currentTarget.value)}/>
            <button type='submit' onClick={(e) => sendLogin(e)}>LogIn</button>
            <Link to="/newaccount">
                Don't have an account? Register
            </Link>
        </Form>
    )
}

export default MainView
