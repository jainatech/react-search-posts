import React from "react";
import { render } from "@testing-library/react";

import Header from './index';
import TestProvider from "../../utils/mocks/TestPovider";

describe("Header component test suite", () => {  

  it('it should render successfully', () => {
    const comp = render(
      <TestProvider>
        <Header />
      </TestProvider>
    );
    expect(comp.container).toBeTruthy();
  });
});