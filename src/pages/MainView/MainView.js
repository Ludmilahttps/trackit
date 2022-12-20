import React from 'react'
import { Link, Navigate } from "react-router-dom"
import { Form } from "./style"
import { URL } from "../../constants/urls"
import axios from "axios"
import { useState} from "react";
import { useContext } from "react";
import { ThreeDots } from 'react-loader-spinner'
import { useNavigate } from "react-router-dom"
import UserContext from '../../UserContext.js';
 
function MainView() {
    const { setInfo, setSidebar } = useContext(UserContext);

    const goTo =  useNavigate();
    const [userEmail, setEmail] = useState('')
    const [userPassword, setPassword] = useState('')
    const [sentRequest, setSentRequest] = useState(false)
    const [save, setSave] = useState(false)

    if ((JSON.parse(localStorage.getItem("dados")) !== null)) {
        if (save === false) {
            setSave(true);
        }
    }

    function sendLogin(e) {
        e.preventDefault()
        setSentRequest(true)

        const post = {
            email: userEmail,
            password: userPassword
        }

        const database = JSON.parse(localStorage.getItem("data"))
        axios.post(`${URL}/auth/login`, post)
        .then(resp => { 
            console.log(resp.data)
            setSidebar(false)
            setInfo(resp.data)
            localStorage.setItem("data", JSON.stringify(post))
            goTo('/today')
        })
        .catch(error => { 
            alert(error)
            localStorage.removeItem("data")
            setSentRequest(false)
            setSave(false);
        })
    }

    //     email: "ludvieira125@hotmail.com",
    //     password: "12345"

    return (
        <Form>
            <img src="../../assets/logo.svg"></img>
            <input data-test="email-input" type="email" name="email" placeholder="email" disabled={sentRequest} onChange={(e) => setEmail(e.currentTarget.value)}/>
            <input data-test="password-input" type="password" name="password" placeholder="password" disabled={sentRequest} onChange={(e) => setPassword(e.currentTarget.value)}/>
            <button data-test="login-btn" type='submit' disabled={sentRequest}  onClick={(e) => sendLogin(e)}>{sentRequest ? <ThreeDots height="18" width="30" color="white" ariaLabel="loading" wrapperStyle={{}} wrapperClassName=""/> : "LogIn" }</button>
            <Link data-test="signup-link" to="/newaccount">
                Don't have an account? Register
            </Link>
        </Form>
    )
}

export default MainView
