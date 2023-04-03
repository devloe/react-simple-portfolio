import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CreditsPage from './CreditsPage';

test('ContactPage => renders', () => {
  render(<BrowserRouter><CreditsPage /></BrowserRouter>);

  expect(screen.getByText("Credits & Disclaimer")).toBeInTheDocument();
});