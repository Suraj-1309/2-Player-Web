import Square from './Square';

export default function Board({
    cells = Array(9).fill(null),
    onCellClick = () => {},
}) {
    function getCellLineClass(index) {
        const row = Math.floor(index / 3);
        const col = index % 3;

        let lineClass = "";
        if (col < 2) lineClass += " border-r-4 border-r-slate-800/80";
        if (row < 2) lineClass += " border-b-4 border-b-slate-800/80";
        return lineClass;
    }

    return (
        <div className='mx-auto grid w-[17rem] grid-cols-3 sm:w-[20rem] md:w-[24rem] lg:w-[30rem]'>
            {cells.map((value, index) => (
                <Square
                    key={index}
                    value={value}
                    onClick={() => onCellClick(index)}
                    className={getCellLineClass(index)}
                />
            ))}
        </div>
    );
}