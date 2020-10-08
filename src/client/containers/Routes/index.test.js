import React from "react";
import { render } from "@testing-library/react";

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './index';
import TestProvider from "../../utils/mocks/TestPovider";

describe("Routes component test suite", () => {
  it('it should render successfully', () => {

    const comp = render(
      <TestProvider>
        <Router>
          <Routes />
        </Router>
      </TestProvider>
    );
    expect(comp.container).toBeTruthy();
  });
});