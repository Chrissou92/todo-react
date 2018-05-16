/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/*
 * Local import
 */

/*
 * Code
 */
const Counter = ({ count }) => {
  let message;

  // Soit 0 message : aucune tâche
  if (count === 0) {
    message = 'Aucune tâche en cours';
  }
  // Soit 1 message : singulier
  else if (count === 1) {
    message = 'Une tâche en cours';
  }
  // Soit on est au pluriel
  else {
    message = `${count} tâches en cours`;
  }
  return (
    <div id="todo-counter">
      {message}
    </div>
  );
};
Counter.propTypes = {
  count: PropTypes.number.isRequired,
};


/*
 * Export default
 */
export default Counter;
