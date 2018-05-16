/*
* Npm import
*/
import React from 'react';
import PropTypes from 'prop-types';


/*
* local import
*/

/*
* Code
*/
const Task = ({ done, label }) => {
  const className = done ? 'todo todo--done' : 'todo';
  return (
    <li className={className}>
      <input
        type="checkbox"
        className="todo-check"
        checked={done}
      />
      <label className="todo-label">{label}</label>
    </li>
  );
};

Task.propTypes = {
  done: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

/*
* Export
*/
export default Task;
