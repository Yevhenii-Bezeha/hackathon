import { AdminItem, Button, Footer } from 'components';
import styles from './admin.module.scss';
import React, { useState } from 'react';
import { NavigationContainer } from 'containers';

const AdminPage = () => {
  const [isUsers, setIsUsers] = useState(true);
  const [isPokemons, setIsPokemons] = useState(false);

  const showUsers = () => {
    setIsUsers(true);
    setIsPokemons(false);
  };

  const showPokemons = () => {
    setIsPokemons(true);
    setIsUsers(false);
  };

  return (
    <div className={styles.container}>
      <NavigationContainer />
      <div className={styles.buttonList}>
        <Button className={styles.button} text="Users" onClick={showUsers} />
        <Button className={styles.button} text="Pokemons" onClick={showPokemons} />
      </div>

      {isUsers ? (
        <div className={styles.containerItems}>
          <AdminItem />
        </div>
      ) : (
        <div className={styles.containerItems}>
          <AdminItem />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default AdminPage;
