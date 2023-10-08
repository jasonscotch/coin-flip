import React, { useState } from "react";

import Coin from "./Coin";

const Flipper = (props) => {
    const [isShowing, setIsShowing] = useState(false);
    const [totalFlips, setTotalFlips] = useState(0);
    const [headsCount, setHeadsCount] = useState(0);
    const [tailsCount, setTailsCount] = useState(0);

    const handleFlip = (isHeads) => {
        setTotalFlips(totalFlips + 1);

        if (isHeads) {
            setHeadsCount(headsCount + 1);
        } else {
            setTailsCount(tailsCount + 1);
        }
    };

    const handleClick = () => {
        setIsShowing(true);
        handleFlip(true);
    };

    return (
        <div className="Flipper">
            {isShowing ? (
                <Coin onFlip={handleFlip} />
            ) : (
                <button className="Flipper-btn" onClick={handleClick}>FLIP MEEEE</button>
            )}
            <p>Out of {totalFlips} flips, there have been {headsCount} heads and {tailsCount} tails.</p>
        </div>
    );
    
}

export default Flipper;