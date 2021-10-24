import clsx from 'clsx';
import { Button, FileInput, Input } from 'components';
import React, { FormEvent, useState } from 'react';
import styles from './add-pokemon-form.module.scss';

type TSignInFormProps = {
  className?: string;
};

const AddPokemonForm = ({ className }: TSignInFormProps): JSX.Element => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonSkills, setPokemonSkills] = useState('');
  const [pokemonPict, setPokemonPict] = useState('');

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
  };

  const addFilePath = (event: any) => {
    console.log(event);
  };

  return (
    <div>
      <form className={clsx(styles.signinForm, className)} onSubmit={onSubmitHandler}>
        <div className={styles.signinForm__title}>Create your own pokemon</div>
        <p className={styles.signinForm__secondaryTitle}>
          Please fill this form to create a pokemon
        </p>
        <Input
          value={pokemonName}
          placeholder="Name"
          onChange={(e: any) => setPokemonName(e.target?.value)}
        />
        <Input
          value={pokemonSkills}
          placeholder="Skills"
          onChange={(e: any) => setPokemonSkills(e.target?.value)}
        />
        <FileInput className={styles.fileInput} addFilePath={addFilePath} />
        <Button text="Just do it" />
      </form>
    </div>
  );
};

export default AddPokemonForm;