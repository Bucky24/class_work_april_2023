import React, { useContext } from 'react';

import styles from './styles.css';
import GameContext from '../context/GameContext';

export default function Board({ grid, setGrid }) {
    const { activePlayer } = useContext(GameContext);

    return (
        <section className={styles.game_outer}>
            {grid.map((item, index) => {
                return <div
                    className={styles.cell}
                    onClick={() => {
                        const newGrid = [...grid];
                        newGrid[index] = activePlayer;
                        setGrid(newGrid);
                    }}
                >
                    {item}
                </div>
            })}
        </section>
    );
}