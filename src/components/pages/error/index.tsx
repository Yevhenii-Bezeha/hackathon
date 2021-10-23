import React from 'react';
import styles from './error.module.scss';

type TErrorProps = {
  status?: number;
  message: string;
};

const ErrorPage = ({ message, status = 500 }: TErrorProps) => {
  return (
    <div className={styles.error}>
      <div className={styles.error__container}>
        <p className={styles.error__status}>{status}</p>
        <div className={styles.error__message}>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
