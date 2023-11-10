export function cartListAction(product) {
    return {
        type: "CART_LIST",
        payload: product
    }
}

export function incrementAction(item) {
    return {
        type: "CART_QUANTITY",
        payload: item
    }
}


export function decrementAction(item) {

    return {
        type: "CART_DECREMENT",
        payload: item
    }

}

export function deleteAction(item) {
    return {
        type: "CART_DELETE",
        payload: item
    }

}

export function registerAction(data) {
    return {
        type: "REGISTERING",
        payload: data
    }
}

export function logInAction(data) {
    return {
        type: "LOGGING",
        payload: data
    }
}

export function clearCartAction() {
    return {
        type: "CART_CLEAR"
    }
}