import {Fragment, useContext} from 'react';
import {FormContext} from '../../../App';
import styles from '../ConfigTab/Config.scss';
import {TextareaGroup} from '../../Controls/Textarea/TextareaGroup';
import {InputGroup} from '../../Controls/Inputs/InputGroup';
import {Button} from '../../Buttons/Button';
import {CheckboxGroup} from '../../Controls/Checkbox/CheckboxGroup';
import {RadioGroup} from '../../Controls/Radio/RadioGroup';

type ItemType = {
  label?: string;
  type?: string;
};
type ButtonType = {
  text?: string;
  color?: string;
};

const getInput = (item: ItemType): JSX.Element | null => {
  const {type, label, ...rest} = item;
  switch (type) {
    case 'text':
    case 'password':
    case 'number':
      return <InputGroup type={type} label={label} {...rest} />;
    case 'textarea':
      return <TextareaGroup label={label} {...rest} />;
    case 'date':
      return <InputGroup type="datetime-local" label={label} {...rest} />;
    case 'checkbox':
      return <CheckboxGroup label={label} {...rest} />;
    case 'radio':
      return <RadioGroup label={label} {...rest} />;
    default:
      return null;
  }
};

const getFormFields = (items: ItemType[]): JSX.Element | null => {
  if (!items) {
    return null;
  }
  return (<>
    {items.map((item, index) => {
      return (
        <Fragment key={index}>
          {getInput(item)}
        </Fragment>
      );
    })}
  </>);
};

const getButtons = (buttons: ButtonType[]): JSX.Element | null => {
  if (!buttons) {
    return null;
  }
  return (<>
    {buttons.map((control, index) => {
      return (
        <Button key={index} style={{backgroundColor: control.color}}>{control.text}</Button>
      );
    })}
  </>);
};

export const Result = ({id}: { id: string }): JSX.Element | null => {
  const [formContext] = useContext(FormContext);
  if (!formContext) {
    return <p>Add json to see a result here</p>;
  }
  const data = JSON.parse(formContext as string);
  if (typeof data !== 'object' || data === null || Array.isArray(data)) {
    return null;
  }
  return (
    <form id={id}>
      {data.title && <h1 className={styles.title}>{data.title}</h1>}
      {data.items && getFormFields(data.items)}
      {data.buttons && getButtons(data.buttons)}
    </form>
  );
};
