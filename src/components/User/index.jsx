import React, { useState, useEffect } from 'react';
import { makeStyles, Button, AppBar, Toolbar, Typography } from '@material-ui/core';
import './room.scss';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))

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

    const classes = useStyles();

    return (
        <div>
            <div className={classes.root} >
                <AppBar position='static'>
                    <Toolbar>
                        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton> */}
                        <Typography variant="h6" className={classes.title}>
                            {name}
                        </Typography>
                        <form action="/logout?_method=DELETE" method="POST">
                            <Button
                                color='inherit'
                                variant='outlined'
                                type="submit"
                            >
                                Log Out
                </Button>
                        </form>
                    </Toolbar>
                </AppBar>
            </div>

            <div id="message-container"></div>
            <form id="send-container">
                <input type="text" id="message-input" />
                <button type="submit" id="send-button">Send</button>
            </form>
        </div>
    )
}

export default User;