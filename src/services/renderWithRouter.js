import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import Provider from '../contexts/Provider';

const renderWithRouter = (component, routeConfigs = {}) => {
  const route = routeConfigs.route || '/';
  const history = routeConfigs.history || createMemoryHistory({ initialEntries: [route] });

  return {
    ...render(
      <Provider>
        <Router history={history}>{component}</Router>,
      </Provider>,
    ),
    history
  };
};

export default renderWithRouter;
