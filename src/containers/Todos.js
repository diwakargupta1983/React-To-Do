import React, { Component } from "react";
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markToDoAsComplete={this.props.markToDoAsComplete} deleteATodo={this.props.deleteATodo}/>
        ));
    }
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markToDoAsComplete: PropTypes.func.isRequired,
    deleteATodo: PropTypes.func.isRequired
}

export default Todos;