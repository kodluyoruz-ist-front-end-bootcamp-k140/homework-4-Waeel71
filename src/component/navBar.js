import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <p class="navbar-brand">Navbar</p>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/" class="nav-link" href="#">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about" class="nav-link" href="#">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact" class="nav-link" href="#">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}