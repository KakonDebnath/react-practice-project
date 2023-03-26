import React from 'react';
const addToCart = (id) => {
    console.log(id);
/*     // For 1 data to local Storage
    const isId= localStorage.getItem(id);
    if(isId){
        const newId = parseInt(isId) + 1;
        localStorage.setItem(id, newId);
    }else{
        localStorage.setItem(id, 1);
    } */

    // For multi data to local storage

    let shoppingCart = {};


    // check local storage has "shopping-cart" key
    const isStored = localStorage.getItem("shopping-cart");
    if (isStored) {
        shoppingCart = JSON.parse(isStored);
    }

    // check passing id is available in "shopping-cart" obj

    const quantity = shoppingCart[id];
    if (quantity) {
        shoppingCart[id] = quantity + 1;
    }else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    




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
        </div>
    );
};

export default Todo;