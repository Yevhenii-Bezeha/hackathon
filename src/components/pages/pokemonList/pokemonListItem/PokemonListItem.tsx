import React from 'react';
import styles from './PokemonListItem.module.scss';
const PokemonListItem = (): JSX.Element => {
  return (
    <li className={styles.pokemonCard}>
      <div className={styles.pokemonCard__typeBox}>
        <span>Type</span>
      </div>
      <div className={styles.pokemonCard__pictureBox}>
        <div className={styles.pokemonCard__gradient}></div>
        <img
          className={styles.pokemonCard__picture}
          src="https://static.posters.cz/image/1300/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/pokemon-pikachu-neon-i71936.jpg"
          alt=""
        />
      </div>
      <div className={styles.pokemonCard__about}>
        <p className={styles.pokemonCard__additional}>Smth here add</p>
        <p className={styles.pokemonCard__additional}>Smth here add</p>
      </div>
      <h3 className={styles.pokemonCard__name}>Pokemon_name</h3>
    </li>
  );
};

export default PokemonListItem;
