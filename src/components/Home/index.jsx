import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

function Home() {
    const [state, setState] = useState({
        // message: '',
        response: '',
        post: '',
        responseToPost: '',
    });

    // const [user, setUser] = useState({
    //     email: '',
    //     password: '',
    // })
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [post, setPost] = useState('');

    useEffect(() => {
        // async function fetchNode() {
        //     fetch('http://localhost:8080/welcome')
        //         .then(res => res.text())
        //         .then(res => setState({ message: res }));
        // }
        // fetchNode();
        callApi()
            .then(res => setState({ response: res.express }))
            .catch(err => console.log(err));
    }, [])

    const callApi = async () => {
        const response = await fetch('http://localhost:8080/welcome');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/world', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ post: post }),
        });
        const body = await response.text();
        setState({ responseToPost: body });
    }

    const handleEmail = e => {
        // setUser({ email: e.target.value });
        setEmail(e.target.value);
        console.log(e.target.value);
    }

    const handlePassword = e => {
        // setUser({ password: e.target.value });
        setPassword(e.target.value);
        console.log(e.target.value);
    }
    console.log(state.responseToPost)

    return (
        <div className="App">
            {/* <p>{state.message}</p> */}
            <p>{state.response} </p>
            <form onSubmit={handleSubmit} action="/login" method="POST">
                {/* <div>
                    <label for="email">Email: </label>
                    <input type="email" id="email" name="email" required
                        value={email}
                        onChange={handleEmail} />
                </div>
                <div>
                    <label for="password">Password: </label>
                    <input type="password" id="password" name="password" required
                        value={password}
                        onChange={handlePassword} />
                </div> */}
                <input type="text"
                    value={post}
                    onChange={e => setPost(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            <Link to='/register'>Register</Link>
            <p>{state.responseToPost}</p>
        </div>
    )
}

export default Home;

