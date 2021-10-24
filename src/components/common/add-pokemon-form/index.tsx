import clsx from 'clsx';
import { Button, FileInput, Input } from 'components';
import React, { FormEvent, useState } from 'react';
// import { ICredentials } from 'types';
import styles from './add-pokemon-form.module.scss';

type TSignInFormProps = {
  // onSubmit: (credentials: ICredentials) => void;
  className?: string;
};

const AddPokemonForm = ({ className }: TSignInFormProps): JSX.Element => {
  const [credentials, setCredentials] = useState({
    name: '',
    skills: '',
  });

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // onSubmit(credentials);
  };

  return (
    <div>
      <form className={clsx(styles.signinForm, className)} onSubmit={onSubmitHandler}>
        <div className={styles.signinForm__title}>Create your own pokemon</div>
        <p className={styles.signinForm__secondaryTitle}>
          Please fill this form to create a pokemon
        </p>
        <Input
          value={credentials.name}
          placeholder="Name"
          onChange={(value: string) =>
            setCredentials((previousState) => ({ ...previousState, login: value }))
          }
        />
        <Input
          value={credentials.skills}
          placeholder="Skills"
          // onChange={(value: string) =>
          //   setCredentials((previousState) => ({ ...previousState, password: value }))
          // }
        />
        <FileInput className={ styles.fileInput}/>
        <Button text="Just do it" />
      </form>
    </div>
  );
};

export default AddPokemonForm;
