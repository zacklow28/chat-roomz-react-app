import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Join.module.css';

const Join = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    return (
        <div className={styles.outerContainer}>
            <h1 className={styles.title}>Chat Roomz</h1>
            <div className={styles.innerContainer}>
                <h2 className={styles.heading}>Join</h2>
                <div><input placeholder="Name" className={styles.input} value={name} onChange={(event) => setName(event.target.value)}/> </div>
                <div><input placeholder="Room" className={styles.input} value={room} onChange={(event) => setRoom(event.target.value)}/> </div>
                <Link onClick={(event) => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className={styles.button} type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    );
};

export default Join;