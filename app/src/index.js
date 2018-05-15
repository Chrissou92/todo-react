/*
* Npm import
*/
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
/*
* local import
*/
import App from 'src/components/App';
/*
* Code
*/
document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('root'));
});
