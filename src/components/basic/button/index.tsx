import React, { ReactNode, MouseEvent } from 'react';
import styles from './button.module.scss';
import clsx from 'clsx';

type TButtonProps = {
  className?: string;
  text?: string;
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ className, onClick, children, text }: TButtonProps): JSX.Element => {
  const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button className={clsx(styles.button, className)} onClick={onClickHandler}>
      {children}
      {text}
    </button>
  );
};

export default Button;
