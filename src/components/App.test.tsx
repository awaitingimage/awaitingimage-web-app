/// <reference types="@types/jest" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
