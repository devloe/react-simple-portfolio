import { render, screen } from '@testing-library/react';
import ContactPage from './ContactPage';
import { BrowserRouter } from 'react-router-dom';

test('ContactPage => renders', () => {
  render(
    <BrowserRouter>
      <ContactPage />
    </BrowserRouter>
  );

  expect(screen.getByText("Let's work together")).toBeInTheDocument();
});
