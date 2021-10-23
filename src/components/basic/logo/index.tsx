import React from 'react';
import clsx from 'clsx';
import styles from './logo.module.scss';

type ILogoProps = {
  className?: string;
};

const Logo = ({ className }: ILogoProps): JSX.Element => {
  return <span className={clsx(styles.logo, className)}>Pokemons</span>;
};

export default Logo;
