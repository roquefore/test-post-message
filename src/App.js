import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [message, setMessage] = useState('white');
    const [force, applyForce] = useState(true);

    useEffect(() => {
        if (window.parent) {
            window.parent.postMessage('WINDOW PARENT EXISTS!11111!!!!');
        } else {
            setMessage('red');
        }
    }, [force]);

    useEffect(() => {
        window.addEventListener(
            'message',
            (event) => {
                if ((event.data.type = 'BUFF')) {
                    setMessage(event.data.message);
                }
            },
            '*',
        );
    }, []);

    return (
        <div className='App'>
            <header className='App-header'>
                <img
                    src={logo}
                    className='App-logo'
                    alt='logo'
                    onClick={() => applyForce(!force)}
                />
                <p
                    style={{
                        background: message || 'white',
                    }}
                >
                    Edit <code>{message}</code> and save to reload.
                </p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
