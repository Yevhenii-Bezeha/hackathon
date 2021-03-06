import React, { MouseEvent, useState } from 'react';
import clsx from 'clsx';
import { Button, Input } from 'components';
import { ICredentials } from 'types';
import styles from './signin-form.module.scss';

type TSignInFormProps = {
  onSubmit: (credentials: ICredentials) => void;
  className?: string;
};

const SignInForm = ({ onSubmit, className }: TSignInFormProps): JSX.Element => {
  const [credentials, setCredentials] = useState<ICredentials>({
    email: '',
    password: '',
  });

  const onSubmitHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onSubmit(credentials);
  };

  return (
    <form className={clsx(styles.signinForm, className)}>
      <div className={styles.signinForm__title}>Sign in</div>
      <p className={styles.signinForm__secondaryTitle}>Please fill this form to sign up.</p>
      <Input
        value={credentials.email}
        placeholder="Email"
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
      <Button text="Sign in" onClick={onSubmitHandler} />
    </form>
  );
};

export default SignInForm;
