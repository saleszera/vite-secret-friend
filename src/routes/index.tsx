import { Route, Routes as ReactRoutes } from 'react-router-dom';

import { Configuration } from '../pages/Configuration';

export const Routes = () => (
  <ReactRoutes>
    <Route path="/" element={<Configuration />} />
  </ReactRoutes>
);
