import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import './room.scss';

function User() {
    const [name, setName] = useState('');

    useEffect(() => {
        async function fetchNode() {
            const response = await fetch('http://localhost:8080/name')
                .then(res => res.text())
                .then(res => {
                    setName(res);
                    console.log(res);
                });
            return response;
        }
        fetchNode();

    }, [])

    // useEffect(() => {
    //     callApi()
    //         .then(res => setName(res.express))
    //         .catch(err => console.log(err));
    // },[])

    // const callApi = async () => {
    //     const response = await fetch('http://localhost:8080/welcome');
    //     const body = await response.json();
    //     if (response.status !== 200) throw Error(body.message);
    //     return body;
    // }
    console.log(name);

    return (
        <div>
            <p>{name} </p>
            <form action="/logout?_method=DELETE" method="POST">
                <Button
                    variant='outlined'
                    type="submit"
                >
                    Log Out
                </Button>
            </form>
            <div id="message-container"></div>
            <form id="send-container">
                <input type="text" id="message-input" />
                <button type="submit" id="send-button">Send</button>
            </form>
        </div>
    )
}

export default User;