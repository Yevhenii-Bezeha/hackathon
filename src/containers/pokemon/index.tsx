import React from 'react';
import { Redirect } from 'react-router';
import { Routes } from 'common';
import { useAppSelector } from 'store';
import { Pokemon as PokemonPage } from 'components';

const Pokemon = (): JSX.Element => {
  const pokemon = useAppSelector((state) => state.pokemon.item);

  return pokemon ? <PokemonPage pokemon={pokemon} /> : <Redirect to={Routes.NOT_FOUND} />;
};

export default Pokemon;
