import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

function Home() {
    const [state, setState] = useState({
        message: '',
    });
    useEffect(() => {
        async function fetchNode() {
            fetch('http://localhost:8080/welcome')
                .then(res => res.text())
                .then(res => setState({ message: res }));
        }
        fetchNode();
    }, [])
    return (
        <div className="App">
            <p>{state.message}</p>
            <form action="/login" method="POST">
                <div>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
            <Link to='/register'>Register</Link>
        </div>
    )
}

export default Home;

