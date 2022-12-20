import React from 'react'
import { Link } from "react-router-dom"
import { New} from "./style"
import { URL } from "../../constants/urls"
import axios from "axios"
import { useState } from "react"
import { ThreeDots } from 'react-loader-spinner'

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
            .catch(error => { 
                alert(error)
                setSentRequest(false)  
            })

    }

    return (
        <New>
            <img src="../../assets/logo.svg"></img>
            <input data-test="email-input" type="email" name="email" placeholder="email" disabled={sentRequest} onChange={(e) => setEmail(e.currentTarget.value)} />
            <input data-test="password-input" type="password" name="password" placeholder="password" disabled={sentRequest} onChange={(e) => setPassword(e.currentTarget.value)} />
            <input data-test="user-name-input" type="name" name="name" placeholder="name" disabled={sentRequest} onChange={(e) => setName(e.currentTarget.value)} />
            <input data-test="user-image-input"  type="photo" name="photo" placeholder="photo" disabled={sentRequest} onChange={(e) => setPhoto(e.currentTarget.value)} />
            <button data-test="signup-btn" type='submit' disabled={sentRequest} onClick ={(e) => sendLogin(e)}>{sentRequest ? <ThreeDots height="18" width="30" color="white" ariaLabel="loading" wrapperStyle={{}} wrapperClassName=""/> : "Register" }</button>
            <Link data-test="login-link" to="/">
                Already have an account? LogIn
            </Link>
        </New>
    )
}

export default NewAccount


