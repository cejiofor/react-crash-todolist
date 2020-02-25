import React, { Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import * as uuid  from 'uuid';
import About from './components/pages/About';


class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Eat food',
        completed: false
      },
      {
        id: uuid.v4(),
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
  };

  // Delete Todo item
  delTodo = (id) => {
    this.setState({
      // Use filter to return todos that don't match the given id
      todos: [...this.state.todos.filter(
        (todo) => (todo.id !== id))]
    });
  };

  //Add Todo item
  addTodo = (title) => {
    // console.log(title);
    const newTodo = {
      id: uuid.v4(),
      title: title,
      // title -> for ES6 since these are the same
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render(){
    // console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header/>
            <Route exact path="/" render={props=> (
              <React.Fragment>
                <Todos todos = {this.state.todos} toggleComplete = {this.toggleComplete} delTodo = {this.delTodo}/>
                <AddTodo addTodo={this.addTodo}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
      
    );
  }
  
}

export default App;
