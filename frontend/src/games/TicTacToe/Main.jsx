import { useState , useRef, useEffect} from "react";
import Board from "./components/Board";
import moveSound from "../../assets/tic-tac-toe/sound/move_sound.wav";

export const TicTacToe = () => {
    const [cells, setCells] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const moveAudioRef = useRef(new Audio(moveSound));

    useEffect(() => {
        const audio = new Audio(moveSound);
        audio.preload = "auto";
        audio.volume = 1;
        moveAudioRef.current = audio;
    }, []);

    function playMoveSound(){
        const audio = moveAudioRef.current;
        if(!audio) return;

        audio.currentTime = 0;
        audio.play().catch((err) => {
            console.error("Move sound failed: ", err);
        });
    }

    function handleCellClick(index) {
        if (cells[index]) return;

        const next = [...cells];
        next[index] = xIsNext ? "X" : "O";
        setCells(next);
        setXIsNext((prev) => !prev);

        playMoveSound();
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
