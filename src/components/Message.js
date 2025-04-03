import React from 'react';
import styles from "./Message.module.css";
import EmojiConvertor from 'emoji-js';

const emoji = new EmojiConvertor();
emoji.replace_mode = "unified";
emoji.img_set = "apple";
emoji.img_sets.apple.path = "https://cdn.jsdelivr.net/gh/iamcal/emoji-data/img-apple-64/"; // CDN path for images


const Message = ({ message, name }) => {
    let isSentByCurrUser = false;
    const trimmedName = name.trim().toLowerCase();

    if (message.user === trimmedName) {
        isSentByCurrUser = true;
    }

    const messageText = emoji.replace_colons(message.text);

    return (
    isSentByCurrUser ?
        <div className={styles.messageContainer}>
            <p className={styles.currUser}>{trimmedName}</p>
            <div className={styles.messageBox}>
                <p className={styles.messageText} dangerouslySetInnerHTML={{ __html: messageText }}></p>
            </div>
        </div>
    :
        <div className={styles.otherMessageContainer}>
            <div className={styles.otherMessageBox}>
                <p className={styles.otherMessageText} dangerouslySetInnerHTML={{ __html: messageText}}></p>
            </div>
            <p className={styles.otherUser}>{message.user}</p>
        </div>
    );
};

export default Message;