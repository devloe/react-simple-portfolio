import React from 'react';
import Loader from '../components/loader/Loader';
import { Skin } from './stores/themeStore';

export function suspenseComponent(
  component: React.ReactElement
): React.ReactElement {
  return <React.Suspense fallback={<Loader />}>{component}</React.Suspense>;
}

export function setColorScheme(scheme: 'dark' | 'light') {
  localStorage.setItem('theme', scheme);

  document.documentElement.setAttribute('data-theme', scheme);
}

export function detectColorScheme(): Skin {
  //local storage is used to override OS theme settings
  if (localStorage.getItem('theme')) {
    return localStorage.getItem('theme') as Skin;
  }

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //OS theme setting detected as dark
    return 'dark';
  }

  return 'light';
}
