import { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('Hello~');
    const onClickLeave = () => setMessage('Adios~');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{ color }}>{message}</h1>
            <button style={{ color: 'red' }} onClick={() => setColor('red')}>
                RED
            </button>
            <button
                style={{ color: 'green' }}
                onClick={() => setColor('green')}
            >
                GREEN
            </button>
            <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
                BLUE
            </button>
        </div>
    );
};

export default Say;
