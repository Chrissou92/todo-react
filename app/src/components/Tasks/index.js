/*
* Npm import
*/
import React from 'react';
/*
* local import
*/

/*
* Code
*/
const Tasks = () => (
  <ul id="todo-list">
    <li className="todo">
      <input type="checkbox" className="todo-check" />
      <label className="todo-label">Faire une todo en react</label>
    </li>
  </ul>
);
/*
* Export
*/
export default Tasks;
