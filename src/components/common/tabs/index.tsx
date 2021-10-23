import React, { ReactNode, useState } from 'react';
import clsx from 'clsx';
import Tab from './tab';
import styles from './tabs.module.scss';

type TTab = {
  title?: string;
  content?: ReactNode;
};
type TTabsProps = {
  tabs?: TTab[];
};

const Tabs = ({ tabs }: TTabsProps) => {
  const [currentTab, setCurretTab] = useState<TTab>(tabs ? tabs[0] : {});

  const onTabChangeHandler = (index: number) => {
    const tab = tabs?.find((tab, tabIndex) => index === tabIndex) || {};
    setCurretTab(tab);
  };

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__navigation}>
        {tabs?.map((tab, index) => (
          <span
            key={index}
            className={clsx(styles.tabs__link, tab === currentTab && styles.tabs__link_active)}
            onClick={() => onTabChangeHandler(index)}
          >
            {tab.title}
          </span>
        ))}
      </div>
      <Tab>{currentTab.content}</Tab>
    </div>
  );
};

export default Tabs;
