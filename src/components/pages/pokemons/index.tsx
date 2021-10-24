import React, { useState } from 'react';
import clsx from 'clsx';
import InfiniteScroll from 'react-infinite-scroll-component';
import { AddPokemonForm, Button, Footer, Modal, Navigation, Pokemon } from 'components';
import { IPokemon } from 'types';
import styles from './pokemons.module.scss';
import { Routes } from 'common';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type TPokemonsProps = {
  pokemons: IPokemon[];
  pokemonsNumber: number;
  onLoadMore: () => void;
};

const PokemonsPage = ({ pokemons, pokemonsNumber, onLoadMore }: TPokemonsProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const onLoadMoreHandler = () => {
    if (onLoadMore) {
      onLoadMore();
    }
  };

  const onClickHandle = () => {
    setIsOpen(true);
  };

  // const onEsc = (event: MouseEvent<HTMLButtonElement>) => {
  //   if (event.code === 'Escape') {
  //     setIsOpen(false);
  //   }
  // };

  // const onBackdropClick = (event: MouseEvent<HTMLButtonElement>) => {
  //   if (event.target === event.currentTarget) {
  //     setIsOpen(false);
  //   }
  // };

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
          <div className={styles.buttonBox} onClick={onClickHandle}>
            <Button className={styles.button}>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </div>
          {pokemons.map((pokemon) => (
            <Pokemon pokemon={pokemon} link={`${Routes.ALL}/${pokemon.id}`} key={pokemon.id} />
          ))}
        </InfiniteScroll>
      </main>
      <Footer />
      {isOpen && (
        <Modal>
          <AddPokemonForm />
        </Modal>
      )}
    </div>
  );
};

export default PokemonsPage;
