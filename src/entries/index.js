// let React = require('react');
import { AppContainer } from 'react-hot-loader';
// const HotLoader = require('react-hot-loader');
// let AppContainer = HotLoader.AppContainer;
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.js';

/*
  We use JSX here to only demonstrate that we support it ;)
 */

const rootEl = document.getElementById('root');
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  );

// ReactDOM.render(<App />, rootEl);

// function render(Component) {
//   ReactDOM.render(<AppContainer><Component /></AppContainer>, rootEl);  
// }

render(App);

if (module.hot) module.hot.accept('../App.js', () => render(App));