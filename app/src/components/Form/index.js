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
const Form = ({ onFormSubmit }) => (
  <form
    id="todo-form"
    onSubmit={onFormSubmit}
  >
    <input
      type="text"
      id="todo-input"
      placeholder="Ajouter une tâche"
      autoComplete="off"
    />
  </form>
);
Form.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
/*
* Export
*/
export default Form;
