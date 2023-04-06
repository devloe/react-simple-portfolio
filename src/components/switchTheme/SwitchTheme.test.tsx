import { fireEvent, render, screen } from '@testing-library/react';
import SwitchTheme from './SwitchTheme';
import { Provider } from 'react-redux';
import { store } from '../../lib/store';

test('SwitchTheme => renders', () => {
  render(
    <Provider store={store}>
      <SwitchTheme />
    </Provider>
  );

  const button = screen.getByRole('button');

  expect(button).toBeInTheDocument();
});

test('SwitchTheme => changes theme to light', () => {
  render(
    <Provider store={store}>
      <SwitchTheme />
    </Provider>
  );

  const button = screen.getByRole('button');

  fireEvent.click(button);

  expect(screen.getByTitle('Switch to light mode')).toBeInTheDocument();
  expect(store.getState().theme.skin).toBe('dark');
});
