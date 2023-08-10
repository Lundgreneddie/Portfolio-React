import React from 'react';
import { Header } from 'components/Header';
import { Introduction } from 'components/Introduction';
import { Tech } from 'components/Tech';
import { Projects } from 'components/Projects';
import { Skills } from 'components/Skills';

export const App = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <Tech />
      <Projects />
      <Skills />
    </div>
  );
};
