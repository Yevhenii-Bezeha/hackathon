import React from 'react';
import clsx from 'clsx';
import { IPokemon } from 'types';
import { Footer, Navigation } from 'components';
import styles from './pokemon.module.scss';

type TPokemonProps = {
  pokemon: IPokemon;
};

const Pokemon = ({ pokemon }: TPokemonProps): JSX.Element => {
  return (
    <div>
      <Navigation />
      <main className={clsx('main', styles.main)}>
        <div className={clsx('container', styles.main__container)}>
          <div className={styles.main__image}>
            <img src={pokemon.photo} alt={pokemon.name} />
          </div>
          <div className={styles.main__description}>
            <h1 className={styles.main__title}>{pokemon.name}</h1>
            <div className={styles.main__text}>
              <p>Ability: {pokemon.ability}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pokemon;
