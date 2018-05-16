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
/*
* state initial
*/
state = {
  tasks: [
    {
      id: 1,
      label: 'Faire une todo-list en JS',
      done: true,
      favorite: false,
    },
    {
      id: 12,
      label: 'Faire une todo-list en React',
      done: false,
      favorite: true,
    },
    {
      id: 43,
      label: 'Vivre paisiblement',
      done: false,
      favorite: false,
    },
    {
      id: 5,
      label: 'Coder Facebook',
      done: false,
      favorite: false,
    },
  ],
}
 // fonction qui recup la valeur de l'imput
 handleSubmit = (evt) => {
   evt.preventDefault();
   const input = document.getElementById('todo-input');
   console.log(input.value);
 }
 render() {
   // vars pour recuperer les taches
   const { tasks } = this.state;
   // recup tache pas effectuées
   const undoneTasks = tasks.filter(task => !task.done);
   // on compte le nombre de tâches
   const count = undoneTasks.length;
   return (
     <div id="todo">
       <Form onFormSubmit={this.handleSubmit} />
       <Counter count={count} />
       <Tasks tasks={tasks} />
     </div>
   );
 }
}
/*
* Export
*/
export default App;
