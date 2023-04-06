import { render, screen } from '@testing-library/react';
import {
  setColorScheme,
  suspenseComponent,
  detectColorScheme,
} from '../lib/util';

describe('setColorScheme function', () => {
  beforeEach(() => {
    // Creamos una simulación de localStorage
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
    };
    // Sobrescribimos la propiedad window.localStorage con nuestra simulación
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });
  });

  it("should set the localStorage item and update the data-theme attribute to 'dark'", () => {
    setColorScheme('dark');

    expect(localStorage.setItem).toHaveBeenLastCalledWith('theme', 'dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it("should set the localStorage item and update the data-theme attribute to 'light'", () => {
    setColorScheme('light');

    expect(localStorage.setItem).toHaveBeenLastCalledWith('theme', 'light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });
});

describe('suspenseComponent', () => {
  it('wraps the component in a Suspense component with a loader as fallback', async () => {
    render(suspenseComponent(<div>[Component]</div>));

    expect(screen.getByText('[Component]')).toBeInTheDocument();
  });
});

describe('detectColorScheme', () => {
  it('returns "dark" when OS theme setting is dark', () => {
    // mock the `matchMedia` function to return a dark theme
    window.matchMedia = jest.fn().mockReturnValue({
      matches: true,
      media: '(prefers-color-scheme: dark)',
    });

    expect(detectColorScheme()).toBe('dark');
  });

  it('returns "light" when OS theme setting is light', () => {
    // mock the `matchMedia` function to return a light theme
    window.matchMedia = jest.fn().mockReturnValue({
      matches: false,
      media: '(prefers-color-scheme: light)',
    });

    expect(detectColorScheme()).toBe('light');
  });

  it.skip('overrides OS theme setting with localStorage value', () => {
    window.matchMedia = jest.fn().mockReturnValue({
      matches: false,
      media: '(prefers-color-scheme: light)',
    });
    // mock the `localStorage` object
    const localStorageMock = {
      getItem: jest.fn().mockReturnValue('dark'),
    };
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });

    expect(detectColorScheme()).toBe('dark');
  });
});
