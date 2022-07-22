import React from "react";
import { NavBar } from "../component/navBar";

export function ErorrPage() {
    return (
        <>
        <NavBar/>
            <div className="container m-3">
                <h1 className="text-danger">Error 404 </h1>
                <h3 className="text-danger">This page does not exist</h3>
            </div>
        </>
    )
}