import React from "react";
import { render } from "@testing-library/react";

import { BrowserRouter as Router } from 'react-router-dom';
import List from './index';
import TestProvider from "../../utils/mocks/TestPovider";
const createTestProps = (props) => ({
  type: 'home_posts_list',
  ...props
})
describe("List component test suite", () => {
  it('it should render successfully', () => {
    let props = createTestProps({
      data: [{ "userId": 1, "id": 1, "title": "title1", "body": "body1" }]
    })
    const comp = render(
      <TestProvider>
        <Router>
        <List {...props}/>
        </Router>
      </TestProvider>
    );
    expect(comp.container).toBeTruthy();
  });
  it('it should not render successfully if type not defined', () => {
    let props = {
      data: [{ "userId": 1, "id": 1, "title": "title1", "body": "body1" }]
    }
    const comp = render(
      <TestProvider>
        <Router>
        <List {...props}/>
        </Router>
      </TestProvider>
    );
    expect(comp.container).toBeTruthy();
  });
});