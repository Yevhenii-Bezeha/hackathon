import React from 'react';
import clsx from 'clsx';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Footer, Navigation, Pokemon } from 'components';
import { IPokemon } from 'types';
import styles from './pokemons.module.scss';
import { Routes } from 'common';

type TPokemonsProps = {
  pokemons: IPokemon[];
  pokemonsNumber: number;
  onLoadMore: () => void;
};

const PokemonsPage = ({ pokemons, pokemonsNumber, onLoadMore }: TPokemonsProps): JSX.Element => {
  const onLoadMoreHandler = () => {
    if (onLoadMore) {
      onLoadMore();
    }
  };

  return (
    <div>
      <Navigation />
      <main className={clsx('main', styles.main)}>
        <InfiniteScroll
          loader={<h1 className={styles.main__title}>Loading...</h1>}
          dataLength={pokemons.length}
          hasMore={pokemons.length < pokemonsNumber}
          next={onLoadMoreHandler}
          className={clsx('container', styles.main__container)}
        >
          {pokemons.map((pokemon) => (
            <Pokemon pokemon={pokemon} link={`${Routes.ALL}/${pokemon.id}`} key={pokemon.id} />
          ))}
        </InfiniteScroll>
      </main>
      <Footer />
    </div>
  );
};

export default PokemonsPage;
