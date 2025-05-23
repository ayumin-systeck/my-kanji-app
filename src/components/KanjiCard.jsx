import { useDrag } from 'react-dnd';

function KanjiCard({ kanji }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'KANJI',
        item: { type: 'KANJI' },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            style={{
                fontSize: '2rem',
                padding: '10px',
                background: 'lightseagreen',
                color: 'white',
                display: 'inline-block',
                cursor: 'grab',
                opacity: isDragging ? 0.5 : 1,
            }}
        >
            {kanji}
        </div>
    );
}

export default KanjiCard;
