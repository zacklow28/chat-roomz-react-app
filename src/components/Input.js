import React from 'react';
import styles from "./Input.module.css";

const Input = ({ message, setMessage, sendMessage }) => {
    return (
    <div className={styles.container}>
        <input
        className={styles.input}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) => event.key === "Enter" ? sendMessage(event) : null}/>
        <button className={styles.sendButton} onClick={(event) => sendMessage(event)}>Send</button>
    </div>
    );
};

export default Input;