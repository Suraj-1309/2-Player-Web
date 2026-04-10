import xImg from "../../../assets/tic-tac-toe/images/zoro_kawai_face.jpg"
import oImg from "../../../assets/tic-tac-toe/images/sanji_kawai_face.png"

function Mark({ value }) {
    if (value === 'X') {
        return <img src={xImg} alt='X' className='h-12 w-12 rounded-full object-cover md:h-16 md:w-16 lg:h-20 lg:w-20' />
    }
    if (value === 'O') {
        return <img src={oImg} alt='O' className='h-12 w-12 rounded-full object-cover md:h-16 md:w-16 lg:h-20 lg:w-20' />
    }

    return null;
}

export default function Square({ value, onClick, className = "" }) {
    return (
        <button
            className={`flex aspect-square h-auto w-full items-center justify-center bg-transparent transition hover:bg-white/20 ${className}`}
            onClick={onClick}
            type='button'
        >
            <Mark value={value} />
        </button>
    )
};