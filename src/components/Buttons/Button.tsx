import {MouseEvent, CSSProperties, ReactNode} from 'react';
import classNames from 'classnames';
import styles from './Button.scss';

interface ButtonInterface {
  type?: 'button' | 'submit' | 'reset' | undefined;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({type='button', className, onClick, style, children, ...rest}: ButtonInterface): JSX.Element => {
  return (
    <button className={classNames(styles.btn, className)} type={type} onClick={onClick} style={style} {...rest}>{children}</button>
  );
};
