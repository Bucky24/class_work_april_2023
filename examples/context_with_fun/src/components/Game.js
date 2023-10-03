import React, { useContext, useState } from 'react';

import styles from './styles.css';
import Board from './Board';
import Stats from './Stats';
import GameContext from '../context/GameContext';

export default function Game() {
    const [grid, setGrid] = useState(["","","","","","","","",""]);
    const { activePlayer, setActivePlayer } = useContext(GameContext);

    return (<div>
        <Board grid={grid} setGrid={(newGrid) => {
            setGrid(newGrid);

            if (activePlayer === "X") {
                setActivePlayer("O");
            } else {
                setActivePlayer("X");
            }
        }} />
        <Stats grid={grid} />
    </div>);
}