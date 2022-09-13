import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';
import {Tabs} from './Tabs';

const tabsData = [
  {
    id: 'config',
    title: 'Config',
  },
  {
    id: 'result',
    title: 'Result',
  },
];

const setTabs = (activeTabId?: string): void => {
  render(<Tabs tabsData={tabsData} activeTabId={activeTabId}>
    <div id={tabsData[0].id}>Config tab content</div>
    <div id={tabsData[1].id}>Result tab content</div>
  </Tabs>);
};

describe('Tabs', () => {
  it('should render component', () => {
    setTabs();
    expect(screen.getByText('Config')).toBeInTheDocument();
    expect(screen.getByText('Result')).toBeInTheDocument();
    expect(screen.getByText('Config tab content')).toBeInTheDocument();
    expect(screen.getByText('Result tab content')).toBeInTheDocument();
    expect(screen.getByText('Config tab content').closest('div')).toBeVisible();
    expect(screen.getByText('Result tab content').closest('div')).not.toBeVisible();
  });

  it('should show activeTab', () => {
    setTabs(tabsData[1].id);
    expect(screen.getByText('Config tab content').closest('div')).not.toBeVisible();
    expect(screen.getByText('Result tab content').closest('div')).toBeVisible();
  });

  it('should change visible tab after click', async () => {
    setTabs();
    expect(screen.getByText('Config tab content').closest('div')).toBeVisible();
    expect(screen.getByText('Result tab content').closest('div')).not.toBeVisible();
    await userEvent.click(screen.getByRole('tab', {name: /Result/i}));
    expect(screen.getByText('Config tab content').closest('div')).not.toBeVisible();
    expect(screen.getByText('Result tab content').closest('div')).toBeVisible();
  });
});
