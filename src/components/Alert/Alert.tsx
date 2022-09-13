import classNames from 'classnames';
import styles from './Alert.scss';

interface AlertInterface {
  alert?: string;
  className?: string;
}

export const Alert = ({alert, className}: AlertInterface): JSX.Element => {
  return (
    <>
      {alert && <span className={classNames(styles.alert, className)} role="alert">{alert}</span>}
    </>
  );
};
