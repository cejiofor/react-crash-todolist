import React, { Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';

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

  markDelete = (id) => {
    this.setState({
      todos: this.state.todos.map(
        (todo) => {
          if(todo.id === id){
            console.log(id);
          }
          return todo;
        }
      )
    });
  }

  render(){
    console.log(this.state.todos);
    return (
      <div className="App">
        <h1>App</h1>
        <Todos todos = {this.state.todos} toggleComplete = {this.toggleComplete} markDelete = {this.markDelete}/>
      </div>
    );
  }
  
}

export default App;
