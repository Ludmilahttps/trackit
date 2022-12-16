import React from 'react'
import { Link } from "react-router-dom"
import { New } from "./style"
import { useEffect } from "react"
import { URL } from "../../constants/urls"
import axios from "axios"

function NewAccount() {
    const post = {
        email: "ludvieira125@hotmail.com",
        name: "Ludhy",
        image: "https://i.scdn.co/image/ab6761610000e5ebb0527c32ded4594c557f613a",
        password: "12345"
    }

    useEffect(() => {
        axios.post(`${URL}/sign-up`, post)
            .then(res => { console.log("succes") })
            .catch(error => { console.error(error) })
    }, [])

    return (
        <New>
            <img src="../../assets/logo.svg"></img>
            <input type="email" name="email" placeholder="email"/>
            <input type="password" name="password" placeholder="password"/>
            <input type="name" name="name" placeholder="name"/>
            <input type="photo" name="photo" placeholder="photo"/>
            <button>Register</button>
            <Link to="/">
                Already have an account? LogIn
            </Link>
        </New>
    )
}

export default NewAccount


