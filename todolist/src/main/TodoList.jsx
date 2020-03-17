import React from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todoItems = [
        { text: "오늘할일", checked : false},
        { text: "오늘약속", checked : true},
        { text: "과제", checked : false},
        { text: "숙제", checked : true},
        { text: "homework", checked : false}
    ];

    const todoList = todoItems.map(({text, checked}) => <TodoItem text={text} checked={checked} />);
    return <div>{todoList}</div>
};
export default TodoList;

