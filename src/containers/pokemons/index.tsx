import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'store';
import { PokemonsPage, ErrorPage, Loader } from 'components';
import { getPokemons } from './logic/actions';

const PokemonsContainer = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const pokemons = useAppSelector((state) => state.pokemons.items);
  const hasFeched = useAppSelector((state) => state.pokemons.hasFetched);

  return hasFeched ? (
    pokemons ? (
      <PokemonsPage pokemons={pokemons} />
    ) : (
      <ErrorPage message="Pokemons error." />
    )
  ) : (
    <Loader />
  );
};

export default PokemonsContainer;
