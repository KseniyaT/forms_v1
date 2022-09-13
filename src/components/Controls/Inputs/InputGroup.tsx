import {ChangeEvent} from 'react';
import classNames from 'classnames';
import styles from './Inputs.scss';

interface InputGroupInterface {
  type?: string;
  label?: string;
  value?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputGroup = ({type='text', label, placeholder, value, name, className, handleChange, ...rest}: InputGroupInterface): JSX.Element => {
  return (
    <label className={styles.label}>
      {label}
      <input
        type={type}
        className={classNames(styles.input, className)}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handleChange}
        {...rest}
      />
    </label>
  );
};
