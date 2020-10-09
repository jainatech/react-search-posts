import React from "react";
import { fireEvent, getByPlaceholderText, render } from "@testing-library/react";
import '@testing-library/jest-dom'
import Header from './index';
import MockProvider from "../../utils/mocks/MockProvider";
import userEvent from "@testing-library/user-event";

describe("Header component test suite", () => {  

  it('it should render successfully', () => {
    let filterData = jest.fn();
    const comp = render(
      <MockProvider>
        <Header filterData={filterData} text="Hello" search={true} />
      </MockProvider>
    );
    expect(comp.container).toBeTruthy();
  });
});

test('Header.js componnet .', () => {
  const { getByText } = render(<Header search={true} text="Hello test"/>);
  const linkElement = getByText(/Hello test/);
  expect(linkElement).toBeInTheDocument();
});

test('Header.js componnet .', () => {
  const { getByPlaceholderText } = render(<Header search={true} text="Hello test" filterData={jest.fn()}/>);
  const linkElement = getByPlaceholderText("Search by title");
  userEvent.type(linkElement, '{backspace}good')
  expect(linkElement).toBeInTheDocument();
});