/*
* Npm import
*/
import React from 'react';
import PropTypes from 'prop-types';

/*
* local import
*/
import Task from './Task';
/*
* Code
*/
const Tasks = ({ tasks }) => (
  <ul id="todo-list">
    {tasks.map(task => (
      <Task {...task} />
    ))}
  </ul>
);

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
/*
* Export
*/
export default Tasks;
