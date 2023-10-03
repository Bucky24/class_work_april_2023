import React, { useCallback, useContext } from 'react';
import GameContext from '../context/GameContext';

export default function Stats({ grid }) {
    const { activePlayer } = useContext(GameContext);

    const totalX = grid.filter((cell) => cell === "X").length;
    const totalO = grid.filter((cell) => cell === "O").length;

    return <section>
        <div>Current Player: {activePlayer}</div>
        <div>Total X: {totalX}</div>
        <div>Total O: {totalO}</div>
    </section>
}