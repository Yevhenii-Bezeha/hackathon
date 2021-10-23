import React from 'react';
import styles from './loader.module.scss';

const Loader = (): JSX.Element => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader__circle}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
