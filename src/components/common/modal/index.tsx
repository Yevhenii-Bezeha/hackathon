import React, { ReactNode } from 'react';
import styles from './modal.module.scss';

type TModalProps = {
  children: ReactNode;
};

const Modal = ({ children }: TModalProps) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

export default Modal;
