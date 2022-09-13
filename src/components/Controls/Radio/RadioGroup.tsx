import {ChangeEvent} from 'react';
import classNames from 'classnames';
import styles from './Radio.scss';

interface RadioGroupInterface {
  label?: string;
  value?: string;
  name?: string;
  className?: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioGroup = ({label, value, name, className, handleChange, ...rest}: RadioGroupInterface): JSX.Element => {
  return (
    <label className={styles.label}>
      <input type="radio" className={classNames(styles.checkbox, className)} name={name} value={value} onChange={handleChange} {...rest} />
      <span className={styles.checkmark} />
      {label}
    </label>
  );
};
