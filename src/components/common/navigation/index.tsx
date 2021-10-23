import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { Routes } from 'common';
import { Logo } from 'components';
import styles from './navigation.module.scss';

const Navigation = (): JSX.Element => {
  return (
    <nav className={styles.navigation}>
      <div className={clsx('container', styles.navigation__container)}>
        <div className={styles.navigation__part}>
          <NavLink to={Routes.ROOT}>
            <Logo />
          </NavLink>
          <NavLink
            to={Routes.ROOT}
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
          <NavLink
            to={Routes.ABOUT}
            className={styles.navigation__link}
            activeClassName={styles.navigation__link_active}
          >
            About
          </NavLink>
        </div>

        <div className={styles.navigation__part}>
          <NavLink
            to={Routes.LOGIN}
            className={styles.navigation__link}
            activeClassName={styles.navigation__link_active}
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
