import React, { FormEvent, useState } from 'react';
import clsx from 'clsx';
import { Button, FileInput, Input } from 'components';
import { ICredentials } from 'types';
import styles from './signin-form.module.scss';

type TSignInFormProps = {
  onSubmit: (credentials: ICredentials) => void;
  className?: string;
  setShowSignInOrSignUp:  React.Dispatch<React.SetStateAction<boolean>>;
  showSignInOrSignUp: boolean;
};

const SignInFrom = ({
  onSubmit,
  showSignInOrSignUp,
  setShowSignInOrSignUp,
  className,
}: TSignInFormProps): JSX.Element => {
  const [credentials, setCredentials] = useState<ICredentials>({
    name: '',
    email: '',
    avatar: 'avatar',
    password: '',
  });

  const onSubmitLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('credentials', credentials);
    onSubmit(credentials);
  };

  const onSubmitSignUp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('credentials', credentials);
    onSubmit(credentials);
  };

  return (
    <>
      <div className={styles.signinForm__btnsWrap}>
        <Button className={styles.signinForm__btnsWrap__btn} text="Sign up" />
        <Button className={styles.signinForm__btnsWrap__btn} text="Sign in" />
      </div>

      {showSignInOrSignUp ? (
        <form className={clsx(styles.signinForm, className)} onSubmit={onSubmitLogin}>

          <div className={styles.signinForm__title}>Sign in</div>
          <p className={styles.signinForm__secondaryTitle}>Please fill this form to sign up.</p>
          <Input
            value={credentials.email}
            placeholder="email"
            onChange={(value: string) =>
              setCredentials((previousState) => ({ ...previousState, email: value }))
            }
          />
          <Input
            value={credentials.password}
            placeholder="Password"
            onChange={(value: string) =>
              setCredentials((previousState) => ({ ...previousState, password: value }))
            }
          />
          <Button text="Sign in" />
        </form>
      ) :
        (
          <form className={clsx(styles.signinForm, className)} onSubmit={onSubmitSignUp}>
            <div className={styles.signinForm__title}>Sign up</div>
            <p className={styles.signinForm__secondaryTitle}>Please fill this form to sign up.</p>
            <Input
              value={credentials.name}
              placeholder="name"
              onChange={(value: string) =>
                setCredentials((previousState) => ({ ...previousState, name: value }))
              }
            />
            <Input
              value={credentials.email}
              placeholder="email"
              onChange={(value: string) =>
                setCredentials((previousState) => ({ ...previousState, email: value }))
              }
            />
            <Input
              value={credentials.password}
              placeholder="Password"
              onChange={(value: string) =>
                setCredentials((previousState) => ({ ...previousState, password: value }))
              }
            />
            <Button text="Sign up" />
          </form>
        )
      }
    </>
  );
};

export default SignInFrom;
