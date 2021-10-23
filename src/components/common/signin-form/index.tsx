import React, { FormEvent, useState } from 'react';
import { Button, Input } from 'components';
import { ICredentials } from 'types';
import styles from './signin-form.module.scss';

type TSignupFormProps = {
  onSubmit: (credentials: ICredentials) => void;
};

const SignupFrom = ({ onSubmit }: TSignupFormProps): JSX.Element => {
  const [credentials, setCredentials] = useState<ICredentials>({
    login: '',
    password: '',
  });

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(credentials);
  };

  return (
    <form className={styles.signinForm} onSubmit={onSubmitHandler}>
      <div className={styles.signinForm__title}>Sign in</div>
      <p className={styles.signinForm__secondaryTitle}>Please fill this form to sign up.</p>
      <Input
        value={credentials.login}
        placeholder="Login"
        onChange={(value: string) =>
          setCredentials((previousState) => ({ ...previousState, login: value }))
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
  );
};

export default SignupFrom;
