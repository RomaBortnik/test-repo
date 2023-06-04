import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './SharedLayout';
import { GlobalStyle } from 'GlobalStyle';
import Particle from './Particle/Particle';

const Home = lazy(() => import('../pages/Home'));
const Tweets = lazy(() => import('../pages/Tweets'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Particle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="tweets" element={<Tweets />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Route>
      </Routes>
    </>
  );
};
