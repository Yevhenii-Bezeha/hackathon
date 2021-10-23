import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'store';
import { IPokemon } from 'types';
import { PokemonsPage, ErrorPage, Loader } from 'components';
import { getPokemons, incrementPage } from './logic/actions';

const PokemonsContainer = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const {
    items: allPokemons,
    options,
    page,
    hasFetched,
  } = useAppSelector((state) => state.pokemons);
  const [loadedPokemons, setLoadedPokemons] = useState<IPokemon[]>(
    allPokemons ? allPokemons.slice(0, options.pageSize) : [],
  );

  const onLoadMore = () => {
    dispatch(incrementPage());

    if (allPokemons) {
      const loadedPokemonsNumber = options.pageSize * page;
      setLoadedPokemons(allPokemons.slice(0, loadedPokemonsNumber));
    }
  };

  return hasFetched ? (
    allPokemons ? (
      <PokemonsPage
        pokemons={loadedPokemons}
        pokemonsNumber={allPokemons.length}
        onLoadMore={onLoadMore}
      />
    ) : (
      <ErrorPage message="Pokemons error." />
    )
  ) : (
    <Loader />
  );
};

export default PokemonsContainer;
