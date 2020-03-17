import React from 'react';
import "./TodoItem.css"

const TodoItem = ({text, checked}) => {
    return (
        <div className="todo-item">
            <div className='delete-item'>&times;</div>
            <div className={`todo-text ${checked && 'checked'}`}>
                <div>{text}</div>
            </div>
            {
                checked && (<div className="check-mark">&#x2713;</div>)
            }
        </div>
    );
};

export default TodoItem;