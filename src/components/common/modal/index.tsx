import React, { ReactNode } from 'react';
import styles from './modal.module.scss';

type TModalProps = {
  children: ReactNode;
  // onEsc: () => void;
  // onBackdropClick: () => void;
};

const Modal = ({ children }: TModalProps): JSX.Element => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

export default Modal;
