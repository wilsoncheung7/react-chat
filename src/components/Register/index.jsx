import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleName = e => {
        setName(e.target.value);
        console.log(e.target.value);
    }

    const handleEmail = e => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
        console.log(e.target.value);
    }

    const handleSubmit = async e => {
        // e.preventDefault();
        const response = await fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        }).then(res => {
            if (res.status === 200)
                return (<Redirect to='/' />)
        });
        return response;
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit} action="/register" method="POST">
                <div>
                    <label for="name">Name: </label>
                    <input type="text" id="name" name="name" required
                        value={name}
                        onChange={handleName}
                    />
                </div>
                <div>
                    <label for="email">Email: </label>
                    <input type="email" id="email" name="email" required
                        value={email}
                        onChange={handleEmail}
                    />
                </div>
                <div>
                    <label for="password">Password: </label>
                    <input type="password" id="password" name="password" required
                        value={password}
                        onChange={handlePassword}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            <Link to='/'>Login</Link>
            <p>{} </p>
        </div>
    )
}

export default Register;