import { render, screen } from '@testing-library/react';
import Loader from './Loader';

test('Loader => renders', () => {
  render(<Loader />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();
});