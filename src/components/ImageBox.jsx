import { useDrop } from 'react-dnd';

function ImageBox({ image, onDrop }) {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'KANJI',
        drop: () => onDrop(image.match),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    return (
        <div
            ref={drop}
            style={{
                width: '120px',
                height: '120px',
                border: '2px solid #ccc',
                backgroundColor: isOver ? '#ffe' : 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <img
                src={image.src}
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        </div>
    );
}

export default ImageBox;
