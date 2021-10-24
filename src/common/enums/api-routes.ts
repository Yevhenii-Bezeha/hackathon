const ApiRoutes = {
  POKEMONS: '/pokemons',
  POKEMON: (id: string) => `/pokemons/${id}`,
  SIGN_UP: '/auth/sign-up',
  SIGN_IN: '/auth/sign-in',
};

export default ApiRoutes;
