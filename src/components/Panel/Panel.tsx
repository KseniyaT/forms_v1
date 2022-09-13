import {ReactNode} from 'react';
import styles from './Panel.scss';

interface PanelInterface {
  children?: ReactNode
}

export const Panel = ({children}: PanelInterface): JSX.Element => {
  return (
    <div className={styles.panel}>
      {children}
    </div>
  );
};
