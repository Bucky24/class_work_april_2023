import React, { useContext } from 'react';

import GameContext from '../context/GameContext';

export default function Header() {
    const { activePlayer } = useContext(GameContext);
    return (<div>
        Current Player: {activePlayer}
    </div>);
}