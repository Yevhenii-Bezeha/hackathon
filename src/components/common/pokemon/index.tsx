import React from 'react';
import { IPokemon } from 'types';
import { Tag } from 'components';
import styles from './pokemon.module.scss';
import { useHistory } from 'react-router';

type TPokemonProps = {
  pokemon: IPokemon;
  link?: string;
};

const Pokemon = ({ pokemon, link }: TPokemonProps): JSX.Element => {
  const history = useHistory();

  const locale = Intl.DateTimeFormat().resolvedOptions().locale;

  const onClickHandler = () => {
    if (link) {
      history.push(link);
    }
  };

  const date = new Intl.DateTimeFormat(locale).format(new Date(pokemon.createdAt || new Date()));

  console.log(date, pokemon.createdAt);

  return (
    <div className={styles.pokemon} onClick={onClickHandler}>
      <Tag text={pokemon.ability} className={styles.pokemon__tag} />
      <div className={styles.pokemon__overlay}></div>
      <img src={pokemon.photo} alt={pokemon.name} className={styles.pokemon__image}></img>
      <div className={styles.pokemon__description}>
        {pokemon.createdAt && <p className={styles.pokemon__data}>{date}</p>}
        <p className={styles.pokemon__name}>{pokemon.name}</p>
      </div>
    </div>
  );
};

export default Pokemon;
