import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import io from 'socket.io-client';

let socket;

const Chat = () => {
    const location = useLocation();
    const ENDPOINT = "http://localhost:5000";
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);
        setRoom(room);
        setName(name);

        //only connect if socket doesn't exist
        if (!socket) {
            socket = io(ENDPOINT);
            socket.emit("join", { name, room }, ({ }) => {
            });
        };

        //cleanup socket connection when component unmount
        return () => {
            socket.disconnect();
        }

    }, [location.search]);

    return (
        <h1>{`Hello ${name}! Welcome to Room ${room}`}</h1>
    );
};

export default Chat;