import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationArrow, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { Logo } from 'components';
import styles from './footer.module.scss';
import { NavLink } from 'react-router-dom';
import { Routes } from 'common';

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__part}>
        <div className={styles.footer__container}>
          <Logo className={styles.footer__logo} />
          <div className={styles.footer__description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et optio quaerat ratione
              recusandae in. Culpa obcaecati, officia molestiae cumque corporis, accusamus
              repudiandae eius praesentium quaerat unde, sapiente distinctio tempore neque!
            </p>
          </div>
        </div>
      </div>
      <div className={styles.footer__part}>
        <div className={styles.footer__container}>
          <nav className={styles.footer__navigation}>
            <NavLink to={Routes.ROOT}>Home</NavLink>
            <NavLink to={Routes.ALL}>Pokemons</NavLink>
            <NavLink to={Routes.ABOUT}>About</NavLink>
          </nav>
          <div className={styles.footer__contacts}>
            <a href="#">
              <FontAwesomeIcon icon={faPhone} className={styles.footer__icon} />
              +380 999 999 999
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLocationArrow} className={styles.footer__icon} />
              email@mail.com
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faEnvelopeOpenText} className={styles.footer__icon} />
              Kyiv
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
