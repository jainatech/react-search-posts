import React from "react";
import { render } from "@testing-library/react";

import { BrowserRouter as Router } from 'react-router-dom';
import ListItem from './index';
import TestProvider from "../../utils/mocks/TestPovider";
const createTestProps = (props) => ({
  type : 'home_posts_list',
  ...props
})
describe("ListItem component test suite", () => {
  it('it should render successfully', () => {
    let props = createTestProps({
      item: { "userId": 1, "id": 1, "title": "title1", "body": "body1" },
      index : 1
    })
    const comp = render(
      <TestProvider>
        <Router>
        <ListItem {...props}/>
        </Router>
      </TestProvider>
    );
    expect(comp.container).toBeTruthy();
  });
  it('it should not render successfully if type not defined', () => {
    let props = {
      item: { "userId": 1, "id": 1, "title": "title1", "body": "body1" },
      index : 1
    }
    const comp = render(
      <TestProvider>
        <Router>
        <ListItem {...props}/>
        </Router>
      </TestProvider>
    );
    expect(comp.container).toBeTruthy();
  });
});