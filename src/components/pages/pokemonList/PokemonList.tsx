import React from 'react';
import styles from './PokemonList.module.scss';
import PokemonListItem from './pokemonListItem';
const PokemonList = (): JSX.Element => {
  return (
    <div>
      <ul className={styles.gallery}>
        <li>
          <PokemonListItem />
        </li>
        <li>
          <PokemonListItem />
        </li>
      </ul>
    </div>
  );
};

export default PokemonList;
