import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ImageBox from './components/ImageBox';
import KanjiCard from './components/KanjiCard';

const question = {
    kanji: '火',
    images: [
        { id: 1, src: process.env.PUBLIC_URL + '/img/fire.png', match: true },
        { id: 2, src: process.env.PUBLIC_URL + '/img/water.png', match: false },
        { id: 3, src: process.env.PUBLIC_URL + '/img/tree.png', match: false },
        { id: 4, src: process.env.PUBLIC_URL + '/img/mountain.png', match: false },
        { id: 5, src: process.env.PUBLIC_URL + '/img/river.png', match: false },
        { id: 6, src: process.env.PUBLIC_URL + '/img/sun.png', match: false },
        { id: 7, src: process.env.PUBLIC_URL + '/img/cloud.png', match: false },
        { id: 8, src: process.env.PUBLIC_URL + '/img/stone.png', match: false },
        { id: 9, src: process.env.PUBLIC_URL + '/img/moon.png', match: false },
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
