import {render, screen} from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render component', () => {
    render(<App />);
    expect(screen.getByText('Config')).toBeInTheDocument();
    expect(screen.getByText('Result')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Add Json here')).toBeInTheDocument();
    expect(screen.getByText('Add json to see a result here')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Add Json here').closest('div')).toBeVisible();
    expect(screen.getByText('Add json to see a result here').closest('div')).not.toBeVisible();
  });
});
