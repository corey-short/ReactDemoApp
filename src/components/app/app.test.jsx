import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from './app';

describe('App component', () => {
  test('it shows Hello World when the app is started', () => {
    const testRenderer = TestRenderer.create(<App />);
    expect(testRenderer.toJSON().children[0]).toEqual('Hello World!');
  });
});
