import clsx from 'clsx';
import React from 'react';
import styles from './tag.module.scss';

type TTagProps = {
  text: string;
  className?: string;
};

const Tag = ({ text, className }: TTagProps): JSX.Element => {
  return <span className={clsx(styles.tag, className)}>{text}</span>;
};

export default Tag;
