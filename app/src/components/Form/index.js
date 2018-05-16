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
class Form extends React.Component {
  /*
   * Actions
   */
  onSubmit = (evt) => {
    evt.preventDefault();

    this.props.onFormSubmit();
  }

  onChange = (evt) => {
    // On récupère la valeur de l'input
    const { value } = evt.target;

    this.props.onInputChange(value);
  }

  /*
   * Render
   */
  render() {
    const { inputValue } = this.props;
    return (
      <form
        id="todo-form"
        onSubmit={this.onSubmit}
      >
        <input
          type="text"
          id="todo-input"
          placeholder="Ajouter une tâche"
          autoComplete="off"
          onChange={this.onChange}
          value={inputValue}
        />
      </form>
    );
  }
}
Form.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};


/*
 * Export default
 */
export default Form;
