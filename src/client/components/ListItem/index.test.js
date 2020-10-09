import React from "react";
import { render } from "@testing-library/react";

import { BrowserRouter as Router } from 'react-router-dom';
import ListItem from './index';
import MockProvider from "../../utils/mocks/MockProvider";
import userEvent from '@testing-library/user-event'
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
      <MockProvider>
        <Router>
        <ListItem {...props}/>
        </Router>
      </MockProvider>
    );
    expect(comp.container).toBeTruthy();
  });
  it('it should not render successfully if type not defined', () => {
    let props = {
      item: { "userId": 1, "id": 1, "title": "title1", "body": "body1" },
      index : 1
    }
    const comp = render(
      <MockProvider>
        <Router>
        <ListItem {...props}/>
        </Router>
      </MockProvider>
    );
    expect(comp.container).toBeTruthy();
  });
  it('should click on edit post', () => {
    let props = createTestProps({
      item: { "userId": 1, "id": 1, "title": "title1", "body": "body1" },
      index : 1
    })
    const {getByText} = render(
      <MockProvider>
        <Router>
        <ListItem {...props}/>
        </Router>
      </MockProvider>
    );
    const editButton = getByText(/Edit/);
    const link = getByText(/Edit/).closest('a') 
    // expect().toHaveAttribute('href', '/edit/1')
    userEvent.click(link);
    expect(editButton).toBeInTheDocument();
  });
});