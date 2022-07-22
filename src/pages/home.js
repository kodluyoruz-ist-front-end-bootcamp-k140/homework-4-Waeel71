import React, { useEffect, useState } from "react";
import { NavBar } from "../component/navBar";
import "./site.css"

export function HomePage() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                return res.json()
            }).then((response) => {
                setUsers(response)
            })
    })
    return (
        <>
            <NavBar />
            {
                users.map((user) => {
                    return (
                        <div className="container">
                            <div className="card card-width m-1">
                                <div className="card-body">
                                    <h5 className="card-title">{user.name}</h5>
                                    <p className="card-text">{user.email}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}