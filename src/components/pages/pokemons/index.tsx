import React, { KeyboardEvent, useState, MouseEvent, useEffect } from 'react';
import clsx from 'clsx';
import InfiniteScroll from 'react-infinite-scroll-component';
import { AddPokemonForm, Button, Footer, Modal, Pokemon, Input } from 'components';
import { INewPokemon, IPokemon, IUser } from 'types';
import styles from './pokemons.module.scss';
import { Routes } from 'common';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavigationContainer } from 'containers';

type TPokemonsProps = {
  pokemons: IPokemon[];
  pokemonsNumber: number;
  onLoadMore: () => void;
  onExport: () => void;
  user: IUser | null;
  onCreate: (pokemon: INewPokemon) => void;
};

const PokemonsPage = ({
  pokemons,
  pokemonsNumber,
  onLoadMore,
  onExport,
  user,
  onCreate,
}: TPokemonsProps): JSX.Element => {
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
  const onCreatePokemon = (e: any) => {
    onCreate(e)
    setIsOpen(false)
  };
  const onEsc = (event: KeyboardEvent) => {
    if (event.code === 'Escape') {
      setIsOpen(false);
    }
  };

  const onBackdropClick = (event: MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };

  const onChandleChange = (value: any) => {
    setFilterStr(value);
  };

  const getFilteredContacts = () => {
    if (filterStr.trim() === '') {
      return pokemons;
    }

    const filteredPokemos = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(filterStr.toLowerCase()),
    );

    return filteredPokemos.length === 0 ? pokemons : filteredPokemos;
  };

  return (
    <div>
      <NavigationContainer />
      <main className={clsx('main', styles.main)}>
        <div className={styles.inputBox}>
          <h3 className={styles.title}>Find your pokemon</h3>
          <Input className={styles.input} onChange={onChandleChange} />
        </div>
        <InfiniteScroll
          loader={<h1 className={styles.main__title}>Loading...</h1>}
          dataLength={pokemons.length}
          hasMore={pokemons.length < pokemonsNumber}
          next={onLoadMoreHandler}
          className={clsx('container', styles.main__container)}
        >
          <div className={styles.buttonBox}>
            {user && (
              <Button className={styles.button} onClick={onClickHandle}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            )}
            <Button onClick={onExport} className={styles.exportButton}>
              Export
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
          <AddPokemonForm onSubmit={onCreatePokemon} />
        </Modal>
      )}
    </div>
  );
};

export default PokemonsPage;
