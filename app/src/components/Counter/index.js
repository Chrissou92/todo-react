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
const Counter = ({ count }) => {
  let message;
  // condition du message :
  if (count === 0) {
    message = 'aucune tâche en cours';
  }
  else if (count === 1) {
    message = 'Une tâche en cours';
  }
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
* Export
*/
export default Counter;
