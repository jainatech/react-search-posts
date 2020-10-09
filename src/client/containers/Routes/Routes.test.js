import React from "react";
import { render } from "@testing-library/react";

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import MockProvider from "../../utils/mocks/MockProvider";

describe("Routes component test suite", () => {
  it('it should render successfully', () => {

    const comp = render(
      <MockProvider>
        <Router>
          <Routes />
      </Router>
      </MockProvider>
    );
    expect(comp.container).toBeTruthy();
  });
});