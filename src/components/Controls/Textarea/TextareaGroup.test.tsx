import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';
import {TextareaGroup} from './TextareaGroup';

interface TextareaGroupInterface {
  label?: string;
  name?: string;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  onChangeCallback?: (value: string) => void;
  alert?: string;
  textarearef?: {current: null};
}

const handleChangeCallback = jest.fn();

const setTextareaGroup = ({label='Textarea label', placeholder='Textarea placeholder', name, defaultValue, className, onChangeCallback=() => null, alert='', textarearef, ...rest}: TextareaGroupInterface): void => {
  render(
    <TextareaGroup
      label={label}
      placeholder={placeholder}
      name={name}
      defaultValue={defaultValue}
      className={className}
      onChangeCallback={onChangeCallback}
      alert={alert}
      ref={textarearef}
      {...rest}
    />);
};
describe('TextareaGroup', () => {
  it('should render component', () => {
    setTextareaGroup({className: 'newClassName', alert: 'New Alert'});
    const textarea = screen.getByPlaceholderText('Textarea placeholder');
    expect(textarea).toBeInTheDocument();
    expect(textarea.classList.contains('newClassName')).toBeTruthy();
    expect(screen.getByText('Textarea label')).toBeInTheDocument();
    expect(screen.getByText('New Alert')).toBeInTheDocument();
  });

  it('should show value and and called Callback when textarea value is changed', async () => {
    setTextareaGroup({onChangeCallback: handleChangeCallback});
    const textarea = screen.getByPlaceholderText('Textarea placeholder') as HTMLTextAreaElement;
    expect(textarea).toHaveValue('');
    await userEvent.type(textarea, 'hey sup');
    expect(textarea).toHaveValue('hey sup');
    expect(handleChangeCallback).toHaveBeenCalledTimes(7);
  });

  it('should return correct textarea by ref', async () => {
    const textarearef = {
      current: null,
    };
    setTextareaGroup({textarearef});
    const textarea = screen.getByPlaceholderText('Textarea placeholder') as HTMLTextAreaElement;
    expect(textarearef.current).toBe(textarea);
  });
});
