import React, { Children, ReactNode } from 'react';
import styles from './Modal.module.scss';

type TModalProps = { children: ReactNode };
const Modal = ({ children }: TModalProps) => {
  return (
    <div className={styles.Overlay}>
      <div className={styles.Modal}>{children}</div>
    </div>
  );
};

export default Modal;
