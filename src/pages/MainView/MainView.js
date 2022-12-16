import React from 'react'
import { Link } from "react-router-dom"
import { Form } from "./style"
import { useEffect } from "react"
import { URL } from "../../constants/urls"
import axios from "axios"

function MainView() {

    const post = {
        email: "ludvieira125@hotmail.com",
        password: "12345"
    }

    useEffect(() => {
        axios.post(`${URL}/login`, post)
            .then(resp => { console.log(resp.data) })
            .catch(error => { console.error(error) })
    }, [])

    return (
        <Form>
            <img src="../../assets/logo.svg"></img>
            <input type="email" name="email" placeholder="email"/>
            <input type="password" name="password" placeholder="password"/>
            <button>LogIn</button>
            <Link to="/newaccount">
                Don't have an account? Register
            </Link>
        </Form>
    )
}

export default MainView
