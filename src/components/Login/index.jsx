import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { makeStyles, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '20%',
        },
    },
}));

function Home() {
    const classes = useStyles();

    const [state, setState] = useState({
        message: '',
        response: '',
        post: '',
        responseToPost: '',
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [post, setPost] = useState('');

    useEffect(() => {
        async function fetchNode() {
            fetch('http://localhost:8080/welcome')
                .then(res => res.text())
                .then(res => setState({ message: res }));
        }
        fetchNode();

    }, [])

    const handleSubmit = async e => {
        // e.preventDefault();
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({ post: post }),
            body: JSON.stringify({
                // name: name,
                email: email,
                password: password
            })
        });
        const body = await response.text();
        setState({ responseToPost: body });
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }
    console.log(state.responseToPost)

    return (
        <div className="App">
            <h1>{state.message}</h1>
            {/* <p>{state.response} </p> */}
            <form className={classes.root} onSubmit={handleSubmit} action="/login" method="POST">
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
                {/* <input type="text"
                    value={post}
                    onChange={e => setPost(e.target.value)}
                /> */}
                <Button
                    type="submit"
                    variant='contained'
                    color='primary'
                >
                    Login
                </Button>
            </form>
            <Link to='/register'><Button varient='outlined'>Register</Button></Link>
            {/* <p>{state.responseToPost}</p> */}
        </div>
    )
}

export default Home;

