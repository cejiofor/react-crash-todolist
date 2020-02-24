import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
        // ,email: ''
    }

    // Handle text edits in form input boxes
    // use [e.target.name] to update multiple states entries on a form 
    onChange = (e) => this.setState({ [e.target.name]: e.target.value});
    // onChange = (e) => this.setState({ title: e.target.value});
    
    //Submit todo item
    onSumbit = (e) => {
        // Prevent submiting to file
        e.preventDefault();
        // Call props method to pass up component tree
        this.props.addTodo(this.state.title);
        //clear field
        this.setState({title: ''})
    }

    render() {
        return (
            <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
                <input type='text' name='title' style={{flex: '10', padding: '10px'}} placeholder="Add Todo ..." value={this.state.title} onChange={this.onChange}/>
                {/* <input type='email' name='email' style={{flex: '10', padding: '10px'}} placeholder="test@gmail" value={this.state.email} onChange={this.onChange}/> */}
                <input type='submit' value='Submit' className='btn' style={{flex: '1'}} />
            </form>
        )
    }
}

export default AddTodo
