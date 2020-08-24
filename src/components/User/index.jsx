import React, { useState, useEffect } from 'react';

function User() {
    const [name, setName] = useState('');

    useEffect(()=>{
        callApi()
        .then(res => setName(res.express))
        .catch(err => console.log(err));
    })

    const callApi = async () => {
        const response = await fetch('http://localhost:8080/welcome');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    }
    return (
        <div>
            <p>{name} </p>
            <form action="/logout?_method=DELETE" method="POST">
                <button type="submit">Log Out</button>
            </form>
        </div>
    )
}

export default User;