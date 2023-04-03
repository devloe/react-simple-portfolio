import { render, screen } from '@testing-library/react';
import Menu from './Menu';
import { BrowserRouter } from 'react-router-dom';

jest.mock("../switchTheme/SwitchTheme", () => {
    return {
      __esModule: true,
      default: () => { // if you exporting component as default
        return <div/>;
      },
      ChildWillBeIsolated: () => { // if you exporting component as not default
        return <div/>;
      },
    };
  });

test('Menu => renders', () => {
    render(<BrowserRouter><Menu /></BrowserRouter>);

    expect(screen.getByRole('navigation')).toBeInTheDocument(); 
});

test('Menu => renders all items', () => {
  render(<BrowserRouter><Menu /></BrowserRouter>);

  expect(screen.getAllByRole("menuitem").length).toBe(3);
});