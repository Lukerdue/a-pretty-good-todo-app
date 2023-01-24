import React from 'react';
import { toggleComplete } from '../actions/index';
import { TodoStyled } from '../styles/todoStyled';

function Todo(props){
    const { dispatch, todo} = props;

    function handleComplete(){
        console.log("click")
        dispatch(toggleComplete(todo.id))
    }

    return(
        <TodoStyled onClick={handleComplete} className={(todo.completed ? "completed" : "")}>
            <p>{todo.text}</p>
        </TodoStyled>)
}
export default Todo