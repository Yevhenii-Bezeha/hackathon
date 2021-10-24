import React from 'react';
import clsx from 'clsx';
import { Footer, Navigation } from 'components';
import styles from './home.module.scss';

const index = () => {
  return (
    <div>
      <Navigation />
      <main className={clsx('main', styles.main)}>
        <div className={clsx('container', styles.main__container)}>
          <div className={styles.main__image}>{/* <img src={homeImg} alt="Pokemons" /> */}</div>
          <div className={styles.main__description}>
            <h1 className={styles.main__title}>Welcome, travelers! </h1>
            <div className={styles.main__text}>
              <p>You have found what you have been looking for a long time ;)</p>
              <p>
                Create your own Pokemon, leave reviews, share your findings with your friends.
                Pokemon are back!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default index;
