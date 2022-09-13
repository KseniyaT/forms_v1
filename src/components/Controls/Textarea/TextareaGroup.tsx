import {useState, ChangeEvent, forwardRef, useCallback, useRef, useEffect} from 'react';
import classNames from 'classnames';
import styles from './Textarea.scss';
import {Alert} from '../../Alert/Alert';

interface TextareaGroupInterface {
  label?: string;
  name?: string;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  onChangeCallback?: (value: string) => void;
  alert?: string;
}

export const TextareaGroup = forwardRef<HTMLTextAreaElement, TextareaGroupInterface>((props, ref): JSX.Element => {
  const {
    label,
    placeholder,
    name,
    defaultValue,
    className,
    onChangeCallback,
    alert,
    ...rest
  } = props;
  const [value, setValue] = useState<string>(defaultValue || '');
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const resizeTextArea = () => {
    if (textAreaRef && textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }
  };

  useEffect(resizeTextArea, [value]);

  const handleChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setValue(value);
    if (typeof onChangeCallback === 'function') {
      onChangeCallback(value);
    }
  }, [onChangeCallback]);

  const mergeRefs = () => {
    return (node: HTMLTextAreaElement) => {
      textAreaRef.current = node;
      if (ref && 'current' in ref) {
        ref.current = node;
      }
    };
  };

  return (
    <label className={styles.label}>
      {label}
      <textarea
        ref={mergeRefs()}
        className={classNames(styles.textarea, className)}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handleChange}
        {...rest}
      />
      <Alert alert={alert}/>
    </label>
  );
});
