import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import io from 'socket.io-client';
import styles from "./Chat.module.css";
import { InfoBar, Input, Messages, UsersList } from "../components";


let socket;

const Chat = () => {
    const location = useLocation();
    const ENDPOINT = "https://dogwood-site-455708-r5.as.r.appspot.com";
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);
        setRoom(room);
        setName(name);

        socket = io(ENDPOINT, {
            transports: ["polling"],
        });

        socket.emit("join", { name, room }, () => {});

        //cleanup socket connection when component unmount
        return () => {
            socket.disconnect();
        }

    }, [location.search]);


    useEffect(() => {
        socket.on("message", (message) => {
            //spread all the message in messages and then chain the new one
            setMessages([...messages, message]);
        })

        return () => {
            socket.off("message");
        }

    }, [messages]);

    useEffect(() => {
        socket.on("roomData", ({ room, users }) => {
            setUsers(users);
        })

        return () => {
            socket.off("roomData");
        }
    }, [users]);


    const sendMessage = (event) => {
        event.preventDefault();

        //take updated message and check if it is empty
        if (message.length) {
            //sned to backend, and then clear the message variable
            console.log("send");
            socket.emit("sendMessage", message, () => setMessage(""));
        }
    }

    console.log(message, messages);

    return (
        <div className={styles.outerContainer}>
            <div className={styles.container}>
            <InfoBar room={room}/>
            <UsersList users={users}/>
            <Messages messages={messages} name={name} />
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    );
};

export default Chat;