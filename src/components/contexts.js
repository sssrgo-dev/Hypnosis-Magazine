import { createContext } from 'react';

export const StyleContext = createContext({
  gridEl: '',
  gridBlock: 'grid',
  block: 'home-page-container',
});

export const PageSectionContext = createContext('header');
