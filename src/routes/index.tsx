/* eslint-disable import/named */
import { Route, Routes as ReactRoutes } from 'react-router-dom';

import { Configuration } from '../pages/Configuration';
import { PrizeDraw } from '../pages/PrizeDraw';

export const Routes = () => (
  <ReactRoutes>
    <Route path="/" element={<Configuration />} />
    <Route path="/raffle" element={<PrizeDraw />} />
  </ReactRoutes>
);
