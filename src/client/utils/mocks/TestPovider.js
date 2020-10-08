/* eslint-disable react/prop-types */
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store/createstore';

export default function TestProvider({ children }) {
  return (
    <Provider store={store}>{children}</Provider>
  );
}