import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ImageBox from './components/ImageBox';
import KanjiCard from './components/KanjiCard';

const question = {
    kanji: '火',
    images: [
        { id: 1, src: '/img/fire.png', match: true },
        { id: 2, src: '/img/water.png', match: false },
        { id: 3, src: '/img/tree.png', match: false },
        { id: 4, src: '/img/mountain.png', match: false },
        { id: 5, src: '/img/river.png', match: false },
        { id: 6, src: '/img/sun.png', match: false },
        { id: 7, src: '/img/cloud.png', match: false },
        { id: 8, src: '/img/stone.png', match: false },
        { id: 9, src: '/img/moon.png', match: false },
    ],
};

function App() {
    const [result, setResult] = useState(null);

    const handleDrop = (isCorrect) => {
        if (isCorrect) {
            setResult('正解！🎉');
        } else {
            setResult('ちがうよ〜😢');
        }
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div style={{ padding: '20px' }}>
                <h1>漢字を正しい絵にドラッグしよう</h1>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 120px)', gap: '10px' }}>
                    {question.images.map((img) => (
                        <ImageBox key={img.id} image={img} onDrop={handleDrop} />
                    ))}
                </div>
                <div style={{ marginTop: '30px' }}>
                    <KanjiCard kanji={question.kanji} />
                </div>
                {result && <h2 style={{ marginTop: '20px' }}>{result}</h2>}
            </div>
        </DndProvider>
    );
}

export default App;
