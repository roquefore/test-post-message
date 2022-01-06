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
                <img src={logo} className='App-logo' alt='logo' />
                <p
                    style={{
                        background: message || 'white',
                    }}
                >
                    Edit <code>{message}</code> and save to reload.
                </p>
                <p className='App-link' onClick={() => applyForce(!force)}>
                    Learn React
                </p>
                <p
                    onClick={() => {
                        try {
                            window.parent.postMessage('WINDOW PARENT EXISTS!11111!!!!');
                        } catch (err) {
                            alert(JSON.stringify(err, null, 2));
                        }
                    }}
                >
                    SEND PARENT MESSAGE
                </p>
            </header>
        </div>
    );
}

export default App;
