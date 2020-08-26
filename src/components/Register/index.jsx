import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { makeStyles, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '20%',
        },
    },
}));

function Register() {
    const classes = useStyles();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        <div style={{ textAlign: 'center' }}>
            <h1>Register</h1>
            <form className={classes.root} onSubmit={handleSubmit} action="/register" method="POST">
                <div>
                    <TextField
                        label='Name'
                        type='text'
                        id='name'
                        name='name'
                        variant='outlined'
                        required
                        value={name}
                        onChange={handleName}
                    />
                </div>
                <div>
                    <TextField
                        label='Email'
                        type='email'
                        id='email'
                        name='email'
                        variant='outlined'
                        required
                        value={email}
                        onChange={handleEmail}
                    />
                </div>
                <div>
                    <TextField
                        label='Password'
                        type='password'
                        id='password'
                        name='password'
                        variant='outlined'
                        required
                        value={password}
                        onChange={handlePassword}
                    />
                </div>
                <Button
                    type="submit"
                    variant='contained'
                    color='primary'
                >
                    Register
                </Button>
            </form>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <Button varient='outlined'>Back to Login</Button>
            </Link>
        </div>
    )
}

export default Register;