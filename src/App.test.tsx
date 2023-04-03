import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

jest.mock("./components/menu/Menu", () => {
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

test('renders App', () => {
  const { container } = render(<BrowserRouter><App /></BrowserRouter>);

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector('.container')).toBeInTheDocument();
});
