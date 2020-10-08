import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import AppRoutes from '../src/client/containers/Routes'
import MockProvider from '../src/client/utils/mocks/MockProvider';
const webHistory = createBrowserHistory();

describe('Main Application', () => {
  it('Main running without error', () => {
    const app = render(
      <MockProvider>
        <Router history={webHistory}>
          <AppRoutes />
        </Router>
      </MockProvider>
    );
    expect(app.container).toBeTruthy();
  });
});