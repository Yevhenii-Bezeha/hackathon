import React from 'react';
import clsx from 'clsx';
import { Button, FileInput, Footer } from 'components';
import styles from './user-page.module.scss';
import { IUser } from 'types';
import { NavigationContainer } from 'containers';

type TUserPageProps = {
  user: IUser;
};

const UserPage = ({ user }: TUserPageProps) => {
  return (
    <div>
      <NavigationContainer />
      <div className={styles.container}>
        <div className={styles.leftSideBar}>
          <img src={user.avatar} alt="" className={styles.profile__img} />
          <div className={styles.profile__box}>
            <h3 className={styles.profile__title}>{user.name}</h3>
            <p className={styles.profile__text}></p>
            <FileInput />
          </div>
        </div>
        <div className={styles.rigthSideBar}>
          <p className={styles.profile__textBox}>
            <span className={clsx(styles.profile__text, styles.profile__text_accent)}>Name</span>
            <span className={styles.profile__text}>{user.email}</span>
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

export default UserPage;
