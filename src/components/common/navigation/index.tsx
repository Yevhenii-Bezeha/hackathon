import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { Routes } from 'common';
import { Logo } from 'components';
import styles from './navigation.module.scss';
import { IUser } from 'types';

type TNavigationProps = {
  user: IUser | null;
};

const Navigation = ({ user }: TNavigationProps): JSX.Element => {
  return (
    <nav className={styles.navigation}>
      <div className={clsx('container', styles.navigation__container)}>
        <div className={styles.navigation__part}>
          <NavLink to={Routes.HOME}>
            <Logo />
          </NavLink>
          <NavLink
            to={Routes.HOME}
            className={styles.navigation__link}
            activeClassName={styles.navigation__link_active}
          >
            Home
          </NavLink>
          <NavLink
            to={Routes.ALL}
            className={styles.navigation__link}
            activeClassName={styles.navigation__link_active}
          >
            Pokemons
          </NavLink>
          {user && user?.type === 'admin' && (
            <NavLink
              to={Routes.ADMIN}
              className={styles.navigation__link}
              activeClassName={styles.navigation__link_active}
            >
              Admin
            </NavLink>
          )}
        </div>

        <div className={styles.navigation__part}>
          {user ? (
            <NavLink to={Routes.PROFILE} className={styles.navigation__link}>
              Profile
            </NavLink>
          ) : (
            <>
              <NavLink
                to={Routes.SIGN_IN}
                className={styles.navigation__link}
                activeClassName={styles.navigation__link_active}
              >
                Sign in
              </NavLink>
              /
              <NavLink
                to={Routes.SIGN_UP}
                className={styles.navigation__link}
                activeClassName={styles.navigation__link_active}
              >
                Sign up
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
