import React from 'react';
import styles from "./InfoBar.module.css";
import CrossComponent from "../images/cross";
import ChatComponent from "../images/chat";

const InfoBar = ({ room }) => {


    return (
        <div className={styles.outerContainer}>
            <div className={styles.left}>
                <ChatComponent />
                <h3 className={styles.roomName}>Room: {room}</h3>
            </div>
            <div className={styles.right}>
                <a href="/"><CrossComponent /></a>
            </div>
        </div>
    );
};

export default InfoBar;