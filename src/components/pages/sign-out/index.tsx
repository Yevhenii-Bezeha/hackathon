import React from 'react';
import clsx from 'clsx';
import { Navigation, Footer } from 'components';
import styles from './sign-out.module.scss';

const SignInPage = (): JSX.Element => {
  return (
    <div>
      <Navigation />
      <main className={clsx('main', styles.main)}>
        <div className={clsx('container', styles.main__container)}>
          <h1 className={styles.main__title}>Signing out...</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignInPage;
