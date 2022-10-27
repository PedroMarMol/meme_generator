import React from "react";
import memesData from "../memesData";

export default function Meme() {
    /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme( prevState => ({
            ...prevState,
            randomImage: url
        }))
    }
    
    return (
        <main>
            <div className="form">
                <div className="form--inputs">
                    <input></input>
                    <input></input>
                </div>
                <button onClick={getMemeImage} className="form--button">Get a new meme image 🖼</button>
                <img className="form--image" src={meme.randomImage}/>
            </div>
        </main>
    )
}