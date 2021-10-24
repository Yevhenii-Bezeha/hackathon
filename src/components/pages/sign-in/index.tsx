import React, { useState } from 'react';
import clsx from 'clsx';
import { ICredentials } from 'types';
import { Footer, Navigation, SignInForm } from 'components';
import styles from './sign-in.module.scss';

type TSignInPageProps = {
  onSignIn: (credentials: ICredentials) => void;
  onSignUp: (credentials: ICredentials) => void;
};

const SignInPage = ({ onSignIn, onSignUp }: TSignInPageProps): JSX.Element => {
  const [showSignInOrSignUp, setShowSignInOrSignUp] = useState<boolean>(false);

  return (
    <div>
      <Navigation />
      <main className={clsx('main', styles.main)}>
        <div className={clsx('container', styles.main__container)}>
          <SignInForm
            onSubmit={showSignInOrSignUp ? onSignIn : onSignUp}
            className={styles.main__form}
            setShowSignInOrSignUp={setShowSignInOrSignUp}
            showSignInOrSignUp={showSignInOrSignUp}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignInPage;
