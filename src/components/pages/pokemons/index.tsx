import React from 'react';
import clsx from 'clsx';
import { Footer, Navigation, Pokemon } from 'components';
import { IPokemon } from 'types';
import styles from './pokemons.module.scss';
import { Routes } from 'common';

type TPokemons = {
  pokemons: IPokemon[];
};

const PokemonsPage = ({ pokemons }: TPokemons): JSX.Element => {
  return (
    <div>
      <Navigation />
      <main className={clsx('main', styles.main)}>
        <div className={clsx('container', styles.main__container)}>
          {pokemons.map((pokemon) => (
            <Pokemon pokemon={pokemon} link={`${Routes.ALL}/${pokemon.id}`} key={pokemon.id} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PokemonsPage;
