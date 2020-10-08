import React from "react";
import { render } from "@testing-library/react";

import { BrowserRouter as Router } from 'react-router-dom';
import Home from './index';
import TestProvider from "../../utils/mocks/TestPovider";
const createTestProps = (props) => ({
  type : 'home_posts_list',
  ...props
})
describe("Home component test suite", () => {
  it('it should render successfully', () => {
    let props = createTestProps({
      posts: [{ "userId": 1, "id": 1, "title": "title1", "body": "body1" }, { "userId": 1, "id": 2, "title": "title2", "body": "body2" }],
      loading: true
    });
    const comp = render(
      <TestProvider>
        <Router>
        <Home {...props}/>
        </Router>
      </TestProvider>
    );
    expect(comp.container).toBeTruthy();
  });
});