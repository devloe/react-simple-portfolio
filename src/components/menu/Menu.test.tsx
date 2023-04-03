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

  describe("Menu component", () => {
    it('should render', () => {
        render(<BrowserRouter><Menu /></BrowserRouter>);
    
        expect(screen.getByRole('navigation')).toBeInTheDocument(); 
    });
    
    it('should render all nav links', () => {
      const {container} = render(<BrowserRouter><Menu /></BrowserRouter>);
      
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.getElementsByClassName("link").length).toBe(3);
    });
    
    it('should render brand name', async () => {
      render(<BrowserRouter><Menu /></BrowserRouter>);
    
      await new Promise((r) => setTimeout(r, 1500));
    
      expect(screen.getByText('Juan Pablo Lozano')).toBeInTheDocument(); 
    });
  });