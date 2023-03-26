import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';

const AllTodo = () => {
    const [allTodo, setAllTodo] = useState([]);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res=>res.json())
        .then(data=>setAllTodo(data))
    }, [])


    return (
        <div style={{display: "grid", gridTemplateColumns:"repeat(4, 1fr)",  gap: "10px",}}>
            {
                allTodo.map((todo)=> <Todo todo={todo} key={todo.id}></Todo>)
            }
        </div>
    );
};

export default AllTodo;