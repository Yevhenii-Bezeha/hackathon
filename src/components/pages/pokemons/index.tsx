import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import InfiniteScroll from 'react-infinite-scroll-component';
import { AddPokemonForm, Button, Footer, Input, Modal, Navigation, Pokemon } from 'components';
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
  const [filterStr, setFilterStr] = useState('');

  const onLoadMoreHandler = () => {
    if (onLoadMore) {
      onLoadMore();
    }
  };

  const onClickHandle = () => {
    setIsOpen(true);
  };

  const onEsc = (event: any) => {
    if (event.code === 'Escape') {
      setIsOpen(false);
    }
  };

  const onBackdropClick = (event: any) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };

  const onChandleChange = (value: any) => {
    setFilterStr(value);
  };

  const getFilteredContacts = () => {
    if (filterStr === '') {
      return pokemons;
    }
    const filteredPokemos = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(filterStr.toLowerCase()),
    );
    return filteredPokemos.length === 0 ? pokemons : filteredPokemos;
  };

  console.log(getFilteredContacts());
  console.log(pokemons);
  console.log(filterStr);
  return (
    <div>
      <Navigation />
      <main className={clsx('main', styles.main)}>
        <div className={styles.inputBox}>
          <h3 className={styles.titel}>Find your pokemon</h3>
          <Input className={styles.input} onChange={onChandleChange} />
        </div>
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
          {getFilteredContacts().map((pokemon) => {
            return (
              <Pokemon pokemon={pokemon} link={`${Routes.ALL}/${pokemon._id}`} key={pokemon._id} />
            );
          })}
        </InfiniteScroll>
      </main>
      <Footer />
      {isOpen && (
        <Modal onEsc={onEsc} onBackdropClick={onBackdropClick}>
          <AddPokemonForm />
        </Modal>
      )}
    </div>
  );
};

export default PokemonsPage;
