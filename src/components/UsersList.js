import React from 'react';
import styles from "./UsersList.module.css";


const UsersList = ({ users }) => {

    return (
    <div className={styles.container}>
    <span className={styles.heading}>Members</span>
    <div className={styles.users}>
        {users.map((user, i) => <span key={i} className={styles.user}>{user.name} </span>)}
    </div>
    </div>
    )
}


export default UsersList;