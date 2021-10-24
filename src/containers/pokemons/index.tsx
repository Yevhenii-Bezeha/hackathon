import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'store';
import { INewPokemon, IPokemon } from 'types';
import { PokemonsPage, ErrorPage, Loader } from 'components';
import { createPokemon, getPokemons, incrementPage } from './logic/actions';
import { createFile } from 'helpers';
import { EXPORT_FILE_NAME } from 'common';

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

  const onCreate = (pokemon: INewPokemon) => {
    dispatch(createPokemon({ pokemon }));
  };

  const onExport = () => {
    if (allPokemons) {
      createFile(JSON.stringify(allPokemons), EXPORT_FILE_NAME);
    }
  };

  const user = useAppSelector((state) => state.user.item);

  return hasFetched ? (
    allPokemons ? (
      <PokemonsPage
        user={user}
        pokemons={loadedPokemons}
        pokemonsNumber={allPokemons.length}
        onLoadMore={onLoadMore}
        onExport={onExport}
        onCreate={onCreate}
      />
    ) : (
      <ErrorPage message="Pokemons error." />
    )
  ) : (
    <Loader />
  );
};

export default PokemonsContainer;
