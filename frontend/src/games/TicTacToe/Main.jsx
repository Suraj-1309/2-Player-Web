import { useState , useRef, useEffect} from "react";
import Board from "./components/Board";
import moveSound from "../../assets/tic-tac-toe/sound/move_sound.wav";

const WIN_LINES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function getWinner(cells){
    for(const[a, b, c] of WIN_LINES){
        if(cells[a] && cells[a] === cells[b] && cells[a] === cells[c]){
            return cells[a];
        }
    }
    return null;
}

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

    const winner = getWinner(cells);
    const isDraw = !winner && cells.every((cell) => cell != null);
    const isGameOver = winner || isDraw;

    function handleCellClick(index) {

        if (cells[index] || isGameOver) return;

        const next = [...cells];
        next[index] = xIsNext ? "X" : "O";
        setCells(next);
        setXIsNext((prev) => !prev);

        playMoveSound();
    }

    function handleRestart(){
        setCells(Array(9).fill(null));
        setXIsNext(true);
    }

    let statusText = `Turn: ${xIsNext ? "X" : 'O'}`;
    if(winner){
        const loser = winner === 'X' ? 'O' : 'X';
        statusText = `Winner: ${winner} | Loser: ${loser}`;
    }
    else if(isDraw){
        statusText = "Game Draw";
    }

    return (
        <section className="mx-auto mt-10 w-full max-w-md px-4">

            <h2 className="mb-5 text-center text-2xl font-bold tracking-tight text-slate-800">
                {statusText}
            </h2>
            <Board cells={cells} onCellClick={handleCellClick} />

            {isGameOver && (
                <div className="mt-6 flex justify-center">
                    <button
                        type="button"
                        onClick={handleRestart}
                        className="rounded-lg bg-slate-800 px-5 py-2.5 font-semibold text-white transition hover:bg-slate-700"
                    >
                        Restart Game
                    </button>
                </div>
            )}
        </section>
    );
};
