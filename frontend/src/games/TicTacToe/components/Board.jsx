import Square from './Square';

export default function Board({
    cells = Array(9).fill(null),
    onCellClick = () => {},
}) {
    return (
        <div className='grid grid-cols-3 gap-3 place-items-center'>
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