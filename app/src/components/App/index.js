/*
* Npm import
*/
import React from 'react';
/*
* local import
*/
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import Tasks from 'src/components/Tasks';
/*
* Code
*/
const App = () => (
  <div id="todo">
    <Form />
    <Counter />
    <Tasks />
  </div>
);
/*
* Export
*/
export default App;
