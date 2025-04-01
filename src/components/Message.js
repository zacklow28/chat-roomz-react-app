import React from 'react';
import styles from "./Message.module.css";


const Message = ({ message, name }) => {
    let isSentByCurrUser = false;
    const trimmedName = name.trim().toLowerCase();

    if (message.user === trimmedName) {
        isSentByCurrUser = true;
    }

    return (
    isSentByCurrUser ?
        <div className={styles.messageContainer}>
            <p className={styles.currUser}>{trimmedName}</p>
            <div className={styles.messageBox}>
                <p className={styles.messageText}>{message.text}</p>
            </div>
        </div>
    :
        <div className={styles.otherMessageContainer}>
            <div className={styles.otherMessageBox}>
                <p className={styles.otherMessageText}>{message.text}</p>
            </div>
            <p className={styles.otherUser}>{message.user}</p>
        </div>
    );
};

export default Message;