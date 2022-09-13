import {ChangeEvent} from 'react';
import classNames from 'classnames';
import styles from './Checkbox.scss';

interface CheckboxGroupInterface {
  label?: string;
  value?: string;
  name?: string;
  className?: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const CheckboxGroup = ({label, value, name, className, handleChange, ...rest}: CheckboxGroupInterface): JSX.Element => {
  return (
    <label className={styles.label}>
      <input type="checkbox" className={classNames(styles.checkbox, className)} name={name} value={value} onChange={handleChange} {...rest} />
      <span className={styles.checkmark} />
      {label}
    </label>
  );
};
