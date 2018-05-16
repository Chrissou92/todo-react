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

 // fonction qui recup la valeur de l'imput
 handleSubmit = (evt) => {
   evt.preventDefault();
   const input = document.getElementById('todo-input');
   console.log(input.value);
 }
 render() {
   return (
     <div id="todo">
       <Form onFormSubmit={this.handleSubmit} />
       <Counter count={2} />
       <Tasks />
     </div>
   );
 }
}
/*
* Export
*/
export default App;
