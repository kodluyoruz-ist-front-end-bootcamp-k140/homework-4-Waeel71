import React from "react";
import { NavBar } from "../component/navBar";

export function ContactPage() {
    return (
        <>
        <NavBar/>
        <div className="container mt-5">
            <h4>Contact With Us</h4>
            <hr/>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className="btn btn-primary m-2">SEND</button>
        </div>
        </>
    )
}