import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router';
import { Routes } from 'common';
import { useAppDispatch, useAppSelector } from 'store';
import { PokemonPage, Loader } from 'components';
import { getPokemon } from './logic/actions';

const PokemonContainer = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPokemon({ id }));
  }, []);

  const pokemon = useAppSelector((state) => state.pokemon.item);
  const hasFeched = useAppSelector((state) => state.pokemon.item);

  return hasFeched ? (
    pokemon ? (
      <PokemonPage pokemon={pokemon} />
    ) : (
      <Redirect to={Routes.NOT_FOUND} />
    )
  ) : (
    <Loader />
  );
};

export default PokemonContainer;
