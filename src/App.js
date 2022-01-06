import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [message, setMessage] = useState('None');

    useEffect(() => {
        window.addEventListener(
            'message',
            (event) => {
                console.log('event');
                console.log(event);

                setMessage(JSON.stringify(event, null, 2));
            },
            false,
        );
    }, []);

    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
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
