// // jest-dom adds custom jest matchers for asserting on DOM nodes.
// // allows you to do things like:
// // expect(element).toHaveTextContent(/react/i)
// // learn more: https://github.com/testing-library/jest-dom

import '@testing-library/jest-dom/extend-expect';
import MockData from './client/utils/mocks/MockData';

jest.spyOn(global, 'fetch').mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve({ status : true, code : 200 , result : JSON.parse(MockData)})
  })
);

beforeEach(() => {
  global.fetch.mockClear();
});