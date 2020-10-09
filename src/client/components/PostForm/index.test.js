import React from "react";
import { render } from "@testing-library/react";

import { BrowserRouter as Router } from 'react-router-dom';
import PostForm from './index';
import MockProvider from "../../utils/mocks/MockProvider";
const createTestProps = (props) => ({
  type : 'home_posts_list',
  ...props
})
describe("PostForm component test suite", () => {
  it('it should render successfully', () => {
    let props = createTestProps({
      editItem : { "userId": 1, "id": 1, "title": "title1", "body": "body1" }
    })
    const comp = render(
      <MockProvider>
        <Router>
        <PostForm {...props}/>
        </Router>
      </MockProvider>
    );
    expect(comp.container).toBeTruthy();
  });
});