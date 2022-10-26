import React from "react";
import memesData from "../memesData";

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("");
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomMeme = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomMeme].url)
    }
    return (
        <main>
            <div className="form">
                <div className="form--inputs">
                    <input></input>
                    <input></input>
                </div>
                <button onClick={getMemeImage} className="form--button">Get a new meme image 🖼</button>
                <img className="form--image" src={memeImage}/>
            </div>
        </main>
    )
}