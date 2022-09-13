import {ReactNode, useState, Children, isValidElement, MouseEvent} from 'react';
import styles from './Tabs.scss';
import classNames from 'classnames';

export type TabsDataType = {
  id: string;
  title: string;
};

interface TabsInterface {
  tabsData: TabsDataType[],
  activeTabId?: string;
  children?: ReactNode;
}

export const Tabs = ({tabsData, activeTabId, children}: TabsInterface): JSX.Element => {
  const arrayChildren = Children.toArray(children);

  const [activeTab, setActiveTab] = useState<string>(activeTabId || tabsData[0].id);

  const handleTabClick = (event: MouseEvent<HTMLButtonElement>) => {
    setActiveTab((event.target as HTMLButtonElement).name);
  };

  return (
    <>
      <nav className={styles.navs}>
        {
          tabsData.map((tab) => {
            return (
              <button
                role="tab"
                key={tab.id}
                name={tab.id}
                className={classNames(styles.nav, {[styles.active]: activeTab === tab.id} )}
                onClick={handleTabClick}
              >
                {tab.title}
              </button>
            );
          })
        }
      </nav>
      <div className={styles.contentWrapper}>
        {Children.map(arrayChildren, (child) => {
          if (isValidElement(child)) {
            return <div role="tabpanel" key={child.props.id} className={classNames(styles.content, {[styles.active]: child.props.id === activeTab})} style={{display: child.props.id !== activeTab ? 'none' : 'block'}}>{child}</div>;
          }
          return null;
        })}
      </div>
    </>
  );
};
