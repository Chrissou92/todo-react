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
class App extends React.Component {
  /* Actions
  *
  */
 handleSubmit = (evt) => {
   evt.preventDefault();
   const input = document.getElementById('todo-input');
   console.log(input.value);
 }
 render() {
   return (
     <div id="todo">
       <Form onFormSubmit={this.handleSubmit} />
       <Counter />
       <Tasks />
     </div>
   );
 }
}
/*
* Export
*/
export default App;
