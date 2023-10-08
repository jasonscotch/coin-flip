import React, { useState } from "react";
import heads from "./heads.jpg";
import tails from "./tails.jpg";
import './Coin.css'

function Coin(props) {
    const [isHeads, setIsHeads] = useState(true);
    
    const flipCoin = () => {
        const randomBool = Math.random() < 0.5;
        setIsHeads(randomBool);
        props.onFlip(randomBool);
    };

    return (
        <div className="Coin">
            <img className="Coin-image" src={isHeads ? heads : tails} alt={isHeads ? "Heads" : "Tails"} />
            <button className="Coin-button" onClick={flipCoin}>FLIP MEEEE</button>
        </div>
    );
}

export default Coin;