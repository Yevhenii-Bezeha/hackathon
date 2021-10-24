import React, { MouseEvent, useState } from 'react';
import clsx from 'clsx';
import { Button, Input } from 'components';
import { ICredentials } from 'types';
import styles from './signup-form.module.scss';

type TSignInFormProps = {
  onSubmit: (credentials: ICredentials) => void;
  className?: string;
};

const SignUpForm = ({ onSubmit, className }: TSignInFormProps): JSX.Element => {
  const [credentials, setCredentials] = useState<ICredentials>({
    name: '',
    email: '',
    avatar: '',
    password: '',
  });

  const onSubmitHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onSubmit(credentials);
  };

  return (
    <form className={clsx(styles.signupForm, className)}>
      <div className={styles.signupForm__title}>Sign in</div>
      <p className={styles.signupForm__secondaryTitle}>Please fill this form to sign up.</p>
      <Input
        value={credentials.password}
        placeholder="Name"
        onChange={(value: string) =>
          setCredentials((previousState) => ({ ...previousState, name: value }))
        }
      />
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
      <Button text="Sign up" onClick={onSubmitHandler} />
    </form>
  );
};

export default SignUpForm;
