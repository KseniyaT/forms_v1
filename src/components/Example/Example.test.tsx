import {render, screen, waitFor} from '@testing-library/react';
import {Example} from './Example';
import userEvent from '@testing-library/user-event';

const mockCopy = () => Promise.resolve(42);
Object.defineProperty(navigator, 'clipboard', {
  value: {
    writeText: mockCopy,
  },
});

const copyText = 'Copy an example json';

describe('Example', () => {
  it('should render', () => {
    render(<Example />);
    expect(screen.getByText(copyText)).toBeInTheDocument();
  });

  it('should change text and call copy to clipboard func', async () => {
    render(<Example />);
    await userEvent.click(screen.getByText(copyText));
    await waitFor(() => expect(screen.queryByText(copyText)).not.toBeInTheDocument());
    expect(screen.getByText('Copied!')).toBeInTheDocument();
  });
});
