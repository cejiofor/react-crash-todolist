import React, { Component} from 'react';
import './App.css';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Eat food',
        completed: false
      },
      {
        id: 3,
        title: 'Study CS',
        completed: true
      }
    ]
  }

  // Toggle completed task for a Todo Item
  toggleComplete = (id) => {
    this.setState({ 
      todos: this.state.todos.map( 
        (todo) => {
          if (todo.id === id){
            todo.completed = !todo.completed;
          }
          return todo;
        }
      ) 
    });
  }

  delTodo = (id) => {
    this.setState({
      // Use filter to return todos that don't match the given id
      todos: this.state.todos.filter(
        (todo) => (todo.id !== id))
    }); // Do I need to use a spreader here?

  }

  render(){
    console.log(this.state.todos);
    return (
      <div className="App">
        <div className='container'>
          <Header/>
          <Todos todos = {this.state.todos} toggleComplete = {this.toggleComplete} delTodo = {this.delTodo}/>
          <AddTodo/>
        </div>
      </div>
    );
  }
  
}

export default App;
