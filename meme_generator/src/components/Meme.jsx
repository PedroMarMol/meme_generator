import React from "react";
import memesData from "../memesData";

export default function Meme(props) {
    const memesArray = memesData.data.memes
    function getRandomProperty(obj) {
        const keys = Object.keys(obj)
        return keys[Math.floor(Math.random() * keys.length)]
    }
    function getMemeImage() {
        const memeSelector = (memesArray[getRandomProperty(memesArray)])
        const url = memeSelector.url
        console.log(url)
    }
    return (
        <main>
            <div className="form">
                <div className="form--inputs">
                    <input></input>
                    <input></input>
                </div>
                <button onClick={getMemeImage} className="form--button">Get a new meme image 🖼</button>
            </div>
        </main>
    )
}