import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';
import {Config} from './Config';
import {FormContext} from '../../../App';

const getTextarea = (): HTMLInputElement => {
  render(<Config id="config" />);
  return screen.getByPlaceholderText('Add Json here');
};

describe('Config', () => {
  it('should render component', () => {
    const textarea = getTextarea();
    expect(textarea).toBeInTheDocument();
  });

  it('should show alert when incorrect json', async () => {
    const textarea = getTextarea();
    await userEvent.type(textarea, 'hey sup');
    expect(screen.getByText('Invalid Json')).toBeInTheDocument();
  });

  it('should change context', async () => {
    render(<FormContext.Provider value={['', jest.fn()]}>
      <Config id="config" />
    </FormContext.Provider>);
    const textarea = screen.getByPlaceholderText('Add Json here');
    await userEvent.type(textarea, '{{"test": "test value"}');
    expect(screen.queryByText('Invalid Json')).not.toBeInTheDocument();
  });
});
