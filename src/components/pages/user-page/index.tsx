import clsx from 'clsx';
import styles from './user-page.module.scss';
import { Button, FileInput, Footer, Navigation } from 'components';

import React from 'react';
const userPage = () => {
  return (
    <div>
      <Navigation />
      <div className={styles.container}>
        <div className={styles.leftSideBar}>
          <img
            src="https://www.bootdey.com/img/Content/avatar/avatar7.png"
            alt=""
            className={styles.profile__img}
          />
          <div className={styles.profile__box}>
            <h3 className={styles.profile__title}>User name</h3>
            <p className={styles.profile__text}>User add inf</p>
            <FileInput />
          </div>
        </div>
        <div className={styles.rigthSideBar}>
          <p className={styles.profile__textBox}>
            <span className={clsx(styles.profile__text, styles.profile__text_accent)}>Name</span>
            <span className={styles.profile__text}>Kenneth Valdez</span>
            <Button text="Edit" />
          </p>
          <p className={styles.profile__textBox}>
            <span className={clsx(styles.profile__text, styles.profile__text_accent)}>Email</span>
            <span className={styles.profile__text}>fip@jukmuh.al</span>
            <Button text="Edit" />
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default userPage;
