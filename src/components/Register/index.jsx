import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div>
            <h1>Register</h1>
            <form action="/register" method="POST">
                <div>
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Register</button>
            </form>
            <Link to='/'>Login</Link>
        </div>
    )
}

export default Register;