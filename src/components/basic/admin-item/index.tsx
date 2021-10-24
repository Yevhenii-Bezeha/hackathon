import React from 'react';
import styles from './admin-item.module.scss';

const AdminItem = () => {
  return (
    <div className={styles.containerItems}>
      <h3 className={styles.userList__title}>Users</h3>
      <ul className={styles.userList}>
        <li className={styles.item}>User name</li>
        <li className={styles.item}>User name</li>
        <li className={styles.item}>User name</li>
        <li className={styles.item}>User name</li>
      </ul>
    </div>
  );
};

export default AdminItem;
