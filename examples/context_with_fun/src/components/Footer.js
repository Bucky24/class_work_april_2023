import React, { useContext } from 'react';
import GameContext from '../context/GameContext';

export default function Footer() {
    const { activePlayer } = useContext(GameContext);

    return (<div>Player in the footer: {activePlayer}</div>);
}