import React from "react";

export default function Navbar() {
    return(
        <nav className="navbar">
            <div className="navbar--left">
                <img className="navbar--icon" src="/images/trollface.png"/>
                <p className="navbar--title">Meme Generator</p>
            </div>
            <p className="navbar--info">React Course - Project 3</p>
        </nav>
    )
}