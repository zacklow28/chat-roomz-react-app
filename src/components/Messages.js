import React from 'react';
import styles from "./Messages.module.css";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";

const Messages = ({ messages, name }) => {
    return (
        <ScrollToBottom className={styles.messages}>
        {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
        </ScrollToBottom>
    )
}

export default Messages;