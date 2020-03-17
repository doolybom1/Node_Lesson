import React from 'react';
import "./TodoMain.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoMain = ({value}) => {
    return (
        <main>
            <div className="todoTemplate">
                <div className="title">할일</div>
                <div className="form-controller">
                    <TodoForm value={value}/>
                </div>
                <div className="button-controller">
                    <TodoList />
                </div>
            </div>
        </main>
    );
};

export default TodoMain;