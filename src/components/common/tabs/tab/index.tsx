import React, { ReactNode } from 'react';
import styles from './tab.module.scss';

type TTabProps = {
  children?: ReactNode;
};

const Tab = ({ children }: TTabProps) => {
  return <div className={styles.tab}>{children}</div>;
};

export default Tab;
