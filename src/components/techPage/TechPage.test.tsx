import { render, screen } from '@testing-library/react';
import TechPage from './TechPage';

test('TechPage => renders', () => {
  render(<TechPage />);

  expect(screen.getByText("Tech stack")).toBeInTheDocument();
});
