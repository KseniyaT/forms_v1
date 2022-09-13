import React, {useState, useContext, useRef} from 'react';
import {FormContext} from '../../../App';
import styles from './Config.scss';
import textareaStyles from '../../Controls/Textarea/Textarea.scss';
import classNames from 'classnames';
import {TextareaGroup} from '../../Controls/Textarea/TextareaGroup';
import {isJsonValid} from './helpers';
import {Example} from '../../Example/Example';

const alertMsg = 'Invalid Json';

export const Config = ({id}: { id: string }): JSX.Element => {
  const [isValidJson, setIsValidJson] = useState(true);
  const context = useContext(FormContext);
  const setFormContext = context[1];
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleJsonValueChanged = (value: string) => {
    const isValueValid = isJsonValid(value);
    setIsValidJson(isValueValid);
    if (isValueValid && typeof setFormContext === 'function') {
      setFormContext(value);
    }
  };

  return (
    <div className={styles.config} id={id}>
      <TextareaGroup
        className={classNames({[textareaStyles.incorrect]: !isValidJson})}
        placeholder="Add Json here"
        onChangeCallback={handleJsonValueChanged}
        alert={!isValidJson ? alertMsg : undefined}
        ref={textAreaRef}
      />
      <Example />
    </div>
  );
};
