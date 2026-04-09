import Square from './Square';

export default function Board({
    cells = Array(9).fill(null),
    onCellClick = () => {},
}){
    return (
        <div className='board'>
            {cells.map((value, index) => (
                <Square 
                    key={index}
                    value={value}
                    onClick={() => onCellClick(index)}
                />
            ))}
        </div>
    );
}