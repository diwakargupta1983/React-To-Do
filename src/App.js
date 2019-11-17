import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import User from './components/User';
import TodoList from './components/TodoList';
import Banner from './components/Banner';
import Todos from './containers/Todos';
import axios from 'axios';
import AddTodo from './containers/AddToDo';

class App extends Component {
  state = {
    todos: [],
  }
  markToDoAsComplete = (id) => {
      this.setState({
        todos: this.state.todos.map(todo => {
          if(todo.id === id)
            todo.completed = !todo.completed;
          return todo;
        })
      });
  }
  deleteATodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
  }
  addATodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false,
    })
    .then(res => this.setState({
      todos: [...this.state.todos, res.data]
    }));
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }));
  }
  render(){
    return(
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={4}>
            <User />
            <TodoList />        
          </Grid>
          <Grid item xs={8}>
            <Banner title="Team To-Do List" />
            <Todos todos={this.state.todos} markToDoAsComplete = {this.markToDoAsComplete} deleteATodo={this.deleteATodo} /> 
            <AddTodo addATodo={this.addATodo} />         
          </Grid>
        </Grid>
      </Container>
    );
  }
}
export default App;
