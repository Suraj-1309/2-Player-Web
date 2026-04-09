import xImg from "../../../assets/tic-tac-toe/images/zoro_kawai_face.jpg"
import oImg from "../../../assets/tic-tac-toe/images/sanji_kawai_face.png"

function Mark({ value }) {
    if (value === 'X') {
        return <img src={xImg} alt='X' className='h-12 w-12 rounded-full object-cover' />
    }
    if (value === 'O') {
        return <img src={oImg} alt='O' className='h-12 w-12 rounded-full object-cover' />
    }

    return null;
}

export default function Square({ value, onClick }) {
    return (
        <button
            className="flex h-24 w-24 items-center justify-center rounded-xl border-2 border-slate-300 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-slate-500 hover:shadow-md"
            onClick={onClick}
            type='button'
        >
            <Mark value={value} />
        </button>
    )
};