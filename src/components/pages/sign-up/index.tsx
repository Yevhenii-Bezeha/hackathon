import React from 'react';
import clsx from 'clsx';
import { ICredentials } from 'types';
import { Footer, SignUpForm } from 'components';
import styles from './sign-up.module.scss';
import { NavigationContainer } from 'containers';

type TSignUpPageProps = {
  onSignUp: (credentials: ICredentials) => void;
};

const SignUpPage = ({ onSignUp }: TSignUpPageProps): JSX.Element => {
  return (
    <div>
      <NavigationContainer />
      <main className={clsx('main', styles.main)}>
        <div className={clsx('container', styles.main__container)}>
          <SignUpForm onSubmit={onSignUp} className={styles.main__form} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUpPage;
