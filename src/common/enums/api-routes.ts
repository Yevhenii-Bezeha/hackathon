const ApiRoutes = {
  POKEMONS: '/pokemons',
  POKEMON: (id: string) => `/pokemons/${id}`,
  SIGN_UP: '/api/auth/signup',
  SIGN_IN: '/api/auth/signin'
};

export default ApiRoutes;
