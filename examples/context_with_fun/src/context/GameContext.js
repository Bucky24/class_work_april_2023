import React, { useState } from 'react';

const GameContext = React.createContext({});
export default GameContext;

export function GameProvider({ children }) {
    const [activePlayer, setActivePlayer] = useState("X");

    const value = {
        activePlayer,
        setActivePlayer,
    };

    return <GameContext.Provider value={value}>
        {children}
    </GameContext.Provider>
}