import React, { Component} from 'react';
import PropTypes from "prop-types";
import './TodoItem.css';
class TodoItem extends Component {
    getStyle = () =>{
        return{
            textDecoration: this.props.todo.completed ? 'line-through': 'none',
            backgroundColor: '#f4f4f4',
            color: 'blue',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
    }

  render(){
      const {id, title} = this.props.todo;
    return(
        // <div style = {{backgroundColor:'#f4f4f4'}, textColor}>
        <div style = {this.getStyle()}>
            <p>
                <input type='checkbox' onChange={this.props.toggleComplete.bind(this, id)}/> {' '}
                {title}
                <button style = { btnStyle } type='button' className='del' onClick={this.props.delTodo.bind(this, id)}>X</button>
            </p>
            {/* <h3> {this.props.todo.id} </h3>
            <h3> {this.props.todo.title} </h3>
            <h3> {this.props.todo.completed} </h3> */}
        </div>
    );
  }
  
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

// Style Variables
// const textColor = {
//     color: 'blue'
// };

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
};

export default TodoItem;
