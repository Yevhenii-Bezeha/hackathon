import React, { FormEvent, useEffect, useState } from 'react';
import clsx from 'clsx';
import { Button, FileInput, Input } from 'components';
import { INewPokemon } from 'types';
import styles from './add-pokemon-form.module.scss';

type TSignInFormProps = {
  className?: string;
};

const AddPokemonForm = ({ className }: TSignInFormProps): JSX.Element => {
  const [pokemon, setPokemon] = useState<INewPokemon>({
    name: '',
    ability: '',
    photo: '',
  });

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onImageUpload = (value: FileList | null) => {
    const file = value && value[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPokemon((previousState) => ({ ...previousState, photo: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    console.log(pokemon.photo);
  }, [pokemon]);

  return (
    <div>
      <form className={clsx(styles.signinForm, className)} onSubmit={onSubmitHandler}>
        <div className={styles.signinForm__title}>Create your own pokemon</div>
        <p className={styles.signinForm__secondaryTitle}>
          Please fill this form to create a pokemon
        </p>
        <Input
          value={pokemon.name}
          placeholder="Name"
          onChange={(value: string) => setPokemon((previousState) => ({ ...previousState, value }))}
        />
        <Input
          value={pokemon.ability}
          placeholder="Ability"
          onChange={(value: string) =>
            setPokemon((previousState) => ({ ...previousState, ability: value }))
          }
        />
        <FileInput className={styles.fileInput} onChange={onImageUpload} />
        <Button text="Add pokemon" />
      </form>
    </div>
  );
};

export default AddPokemonForm;
