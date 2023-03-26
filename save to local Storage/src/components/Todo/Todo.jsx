import React from 'react';
import { addToLocalStorage, deleteFromLocalStorage } from '../addAndDeleteFromCart/addDelete';

const addToCart = (id) => {
    addToLocalStorage(id)
}


const deleteFromCart = (id)=>{
    deleteFromLocalStorage(id)
}

const Todo = (props) => {
    const { id, userId, title } = props.todo;
    // console.log(props.todo);
    return (
        <div style={{ padding: "10px 0px", border: "2px solid black", borderRadius: "10px", width: "100%", }}>
            <p>id: {id}</p>
            <p>userId: {userId}</p>
            <p>title: {title}</p>
            <button onClick={() => { addToCart(id) }}>Add To Cart</button>
            <button onClick={() => { deleteFromCart(id) }}>Delete From Cart</button>
        </div>
    );
};

export default Todo;