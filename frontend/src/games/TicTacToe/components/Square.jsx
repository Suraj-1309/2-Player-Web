import xImg from "../../../assets/tic-tac-toe/images/zoro_kawai_face.jpg"
import oImg from "../../../assets/tic-tac-toe/images/sanji_kawai_face.png"

function Mark({value}){
    if(value === 'X') return <Img src={xImg} alt='X'/>
    if(value === 'O') return <Img src={oImg} alt='O'/>

    return null;
}

export default function Square({value, onClick}){
    return (
        <button className="square" onClick={onClick}>
            <Mark value={value}/>
        </button>
    )
};