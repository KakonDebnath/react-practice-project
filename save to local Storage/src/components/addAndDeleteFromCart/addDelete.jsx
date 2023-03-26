const addToLocalStorage = (id) => {
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
    } else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
}

const deleteFromLocalStorage = (id) => {
    const isStored = localStorage.getItem("shopping-cart");
    if (isStored) {
        const shoppingCart = JSON.parse(isStored);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
        }
    }
}


export { addToLocalStorage, deleteFromLocalStorage };