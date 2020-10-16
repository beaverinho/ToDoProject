import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import { FcApproval } from "react-icons/fc";

function Todo({todos, completeTodo, removeTodo, updateTodo}) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })


    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    }

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index) => (

        todo.isComplete ? 
            (
            <div className='complete todo-row' key={index}>
                <div key={todo.id} >
                    {todo.text}
                    </div>
                    <div className='icons'>
                        <FcApproval onClick={() => completeTodo(todo.id) } className='delete-icon'/>
                    </div>
                
        
            </div>
            ) : (

            <div className='todo-row' key={index}>
                <div key={todo.id} >
                    {todo.text}
                </div>
                <div className='icons'>
                    <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className='delete-icon'/>
                    <TiEdit onClick={() => setEdit({id: todo.id, value: todo.text})}/>
                    <FcApproval onClick={() => completeTodo(todo.id)}/>
                </div>
            </div>
            )
    ))
}

export default Todo
