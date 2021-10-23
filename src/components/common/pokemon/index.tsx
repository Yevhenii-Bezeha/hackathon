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

  const onClickHandler = () => {
    if (link) {
      history.push(link);
    }
  };

  return (
    <div className={styles.pokemon} onClick={onClickHandler}>
      <Tag text={pokemon.ability} className={styles.pokemon__tag} />
      <div className={styles.pokemon__overlay}></div>
      <img src={pokemon.photo} alt={pokemon.name} className={styles.pokemon__image}></img>
      <div className={styles.pokemon__description}>
        <p className={styles.pokemon__name}>{pokemon.name}</p>
      </div>
    </div>
  );
};

export default Pokemon;
