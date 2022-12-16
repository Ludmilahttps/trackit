import React from 'react'
import { Link } from "react-router-dom"
import { New } from "./style"
import { URL } from "../../constants/urls"
import axios from "axios"
import { useState } from "react"

function NewAccount() {

    const [userEmail, setEmail] = useState('')
    const [userPassword, setPassword] = useState('')
    const [userName, setName] = useState('')
    const [userPhoto, setPhoto] = useState('')
    const [sentRequest, setSentRequest] = useState(false)

    function sendLogin(e) {
        e.preventDefault()
        setSentRequest(true)

        const post = {
            email: userEmail,
            name: userName,
            image: userPhoto,
            password: userPassword
        }

        axios.post(`${URL}/sign-up`, post)
            .then(res => { <Link to="/"></Link> })
            .catch(error => { console.error(error) })

    }

    return (
        <New>
            <img src="../../assets/logo.svg"></img>
            <input type="email" name="email" placeholder="email" disabled={sentRequest} onChange={(e) => setEmail(e.currentTarget.value)} />
            <input type="password" name="password" placeholder="password" disabled={sentRequest} onChange={(e) => setPassword(e.currentTarget.value)} />
            <input type="name" name="name" placeholder="name" disabled={sentRequest} onChange={(e) => setName(e.currentTarget.value)} />
            <input type="photo" name="photo" placeholder="photo" disabled={sentRequest} onChange={(e) => setPhoto(e.currentTarget.value)} />
            <button type='submit' onClick={(e) => sendLogin(e)}>Register</button>
            <Link to="/">
                Already have an account? LogIn
            </Link>
        </New>
    )
}

export default NewAccount


