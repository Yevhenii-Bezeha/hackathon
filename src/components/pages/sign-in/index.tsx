import React from 'react';
import clsx from 'clsx';
import { ICredentials } from 'types';
import { Footer, Navigation, SignInForm } from 'components';
import styles from './sign-in.module.scss';

type TSignInPageProps = {
  onSignIn: (credentials: ICredentials) => void;
};

const SignInPage = ({ onSignIn }: TSignInPageProps): JSX.Element => {
  return (
    <div>
      <Navigation />
      <main className={clsx('main', styles.main)}>
        <div className={clsx('container', styles.main__container)}>
          <SignInForm onSubmit={onSignIn} className={styles.main__form} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignInPage;
