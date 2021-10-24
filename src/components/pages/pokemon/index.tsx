import React from 'react';
import clsx from 'clsx';
import { IPokemon } from 'types';
import { Footer } from 'components';
import { NavigationContainer } from 'containers';
import styles from './pokemon.module.scss';

type TPokemonProps = {
  pokemon: IPokemon;
};

const Pokemon = ({ pokemon }: TPokemonProps): JSX.Element => {
  return (
    <div>
      <NavigationContainer />
      <main className={clsx('main', styles.main)}>
        <div className={clsx('container', styles.main__container)}>
          <div className={styles.main__image}>
            <img src={pokemon.photo} alt={pokemon.name} />
          </div>
          <div className={styles.main__description}>
            <h1 className={styles.main__title}>{pokemon.name}</h1>
            <div className={styles.main__text}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio corporis debitis
                velit, dignissimos amet distinctio, delectus eius ad et dolorum explicabo quaerat
                ducimus. Repellendus id asperiores nemo enim deleniti odio?
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pokemon;
