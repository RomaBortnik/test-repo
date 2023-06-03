import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const Tweets = lazy(() => import('../pages/Tweets'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="tweets" element={<Tweets />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Route>
    </Routes>
  );
};