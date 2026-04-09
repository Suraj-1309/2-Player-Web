import { useState } from "react";
import Board from "./components/Board";

export const TicTacToe = () => {
    const [cells, setCells] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function handleCellClick(index) {
        if (cells[index]) return;

        const next = [...cells];
        next[index] = xIsNext ? "X" : "O";
        setCells(next);
        setXIsNext((prev) => !prev);
    }

    return (
        <section className="mx-auto mt-10 w-full max-w-md px-4">
            <h2 className="mb-5 text-center text-2xl font-bold tracking-tight text-slate-800">
                Turn: {xIsNext ? "X" : "O"}
            </h2>
            <Board cells={cells} onCellClick={handleCellClick} />
        </section>
    );
};
