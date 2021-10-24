# How to use it for developers

1. download the zip-file with the project or clone git repo
2. run npm start in the consol
3. use this API 'https://hackathone-back.herokuapp.com/api'
4. ENDPOINTS
   GET
   --'/pokemons' - get all pokemons
   --'/pokemons:id' -- get one pokemon by id
   POST
   --('/api/pokemon',[authJwt.verifyToken], controller.addPokemon)
   --("/api/comment",[authJwt.verifyToken], controller.addComment))
   PATHC
   --("/api/pokemon/:id",[authJwt.verifyToken], controller.editPokemon)
   DELETE
   --("/api/pokemon/:id",[authJwt.verifyToken], controller.deletePokemon)
   --("/api/comment/:id", [authJwt.verifyToken], controller.deleteComment)
# Overview for users

Welcome to PokemonGo. Here you are a welcome guest. Register, create your own Pokémon, share new abilities with your friends, and leave your comments on their best Pokémon. The time of Pokémon and exploration has just begun!

## Key Topics

In the project directory, you can find:

1. Home page:
   -general information about the project
2. Pokemons page.
   -shows the gallery of all pokemons with general information about them
3. Sign in
   -page for authentication
4. Sign up
   -page for registration

### Advices

1. Open our URL link
2. Read the general information about the project at Home page using the navigation at the top of the website
3. Open the Pokemons page using the navigation and scroll down to see the all list of pokemons
4. Click on your favourite pokepon and read the additional information about it, like abilities
5. Ok, now you are ready to create your own profile
6. Go to Sign up page and think about login and parol
7. Once you know your credentials put them in the inputs at the page
8. Wait to see the answer from our server to understand everthing is ok
9. Again we advice you to open the Pokemons page using navigation
10. You see the button. Click on it and create your own pokemon
11. If you have created a lot of pokemons and cannot find your favourite one do not worry! Be happy, there is an input search by the name
12. Ok, you have done a lot of things and ready to rest, just log out and do not worry about everything else, we will take care about your pokemons
13. Have a nice day :)

### Functionality

(implemented or in development)

-- download all pokemons
-- filter pokemons
-- create an accaunt
-- add new pokemons
-- leave a comments
-- edit your pokemonts

### Future functionality

-- admin panel
-- admin privileges
-- filter by data
-- new information about pokemons

© 2021 RunDeVu. All Rights Reserved.
