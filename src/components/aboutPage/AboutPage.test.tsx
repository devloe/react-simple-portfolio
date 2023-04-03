import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';
import { BrowserRouter } from 'react-router-dom';

test('ContactPage => renders', () => {
  render(<BrowserRouter><AboutPage /></BrowserRouter>);

  expect(screen.getByText("Fuel by passion and curiosity")).toBeInTheDocument();
});