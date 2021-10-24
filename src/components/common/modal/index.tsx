import React, { ReactNode, useEffect } from 'react';
import styles from './modal.module.scss';

type TModalProps = {
  children: ReactNode;
  onEsc: (event: any) => void;
  onBackdropClick: (event: any) => void;
};

const Modal = ({ children, onBackdropClick, onEsc }: TModalProps): JSX.Element => {
  useEffect(() => {
    window.addEventListener('keydown', onEsc);
    return () => {
      window.removeEventListener('keydown', onEsc);
    };
  }, []);

  return (
    <div className={styles.overlay} onClick={onBackdropClick}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

export default Modal;
