/*
 * Npm import
 */
import React from 'react';


/*
 * Local import
 */
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import Tasks from 'src/components/Tasks';
import tasksInitial from 'src/data';

/*
 * Code
 */

const ids = tasksInitial.map(obj => obj.id);
// on calcule l'id max, si le tableau est vide l'id est zero
let lastId = ids.length > 0 ? Math.max(...ids) : 0;
/*
 * Component
 */
class App extends React.Component {
  /*
   * State initial
   */
  state = {
    tasks: tasksInitial,
    input: '',
  }


  /*
   * Actions
   */
  addTask = () => {
    lastId += 1;

    const task = {
      id: lastId,
      label: this.state.input,
      done: false,
    };

    /* On ajoute la tâche au state */
    this.setState({
      tasks: [task, ...this.state.tasks],
      input: '',
    });
  }

  checkTask = idToCheck => () => {
    // Je calcule mes nouvelles données
    const newTasks = this.state.tasks.map((task) => {
      if (task.id === idToCheck) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });

    this.setState({ tasks: newTasks });
  }

  deleteTask = idToDelete => () => {
    const newTasks = this.state.tasks.filter(task => task.id !== idToDelete);
    this.setState({ tasks: newTasks });
  }

  favoriteTask = idToFav => () => {
    const newTasks = this.state.tasks.map((task) => {
      if (task.id === idToFav) {
        return {
          ...task,
          favorite: !task.favorite,
        };
      }
      return task;
    });
    this.setState({ tasks: newTasks });
  }

  changeInput = (value) => {
    this.setState({ input: value });
  }
  /*
   * Render
   */
  render() {
    // Vars
    const { tasks, input } = this.state;

    // On récupère les tâches pas effectuées
    const undoneTasks = tasks.filter(task => !task.done);
    // et on compte combien il y en a
    const count = undoneTasks.length;

    const orderedTasks = [
      // Tâches non effectuées favori
      ...undoneTasks.filter(task => task.favorite),
      // Tâches non effectuées non favori
      ...undoneTasks.filter(task => !task.favorite),
      // Tâches effectuées
      ...tasks.filter(task => task.done),
    ];

    return (
      <div id="todo">
        <Form
          onFormSubmit={this.addTask}
          onInputChange={this.changeInput}
          inputValue={input}
        />
        <Counter count={count} />
        <Tasks
          tasks={orderedTasks}
          actions={{
            onInputChange: this.checkTask,
            onDeleteTask: this.deleteTask,
            onFavoriteTask: this.favoriteTask,
          }}
        />
      </div>
    );
  }
}


/*
 * Export default
 */
export default App;
