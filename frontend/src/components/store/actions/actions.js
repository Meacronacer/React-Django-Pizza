export const filterChange = (filter) => {
    return {
        type: 'FILTER_CHANGE',
        payload: filter
    }
}

export const sortPopupChange = (item) => {
    return {
        type: 'SORT_POPUP_CHANGE',
        payload: item
    }
}

export const pizzaDataLoading = (status) => {
    return {
        type: 'PIZZAS_DATA_LOADING',
        payload: status
    }
}

export const pizzaDataLoaded = (data) => {
    return {
        type: 'PIZZAS_DATA_LOADED',
        payload: data
    }
}

export const addPizzaToCart = (pizza) => {
    return {
        type: 'ADD_PIZZA_TO_CART',
        payload: pizza
    }
}

export const pizzaIncrementInCart = (index) => {
    return {
        type: 'INCREMENT_OF_PIZZA_IN_CART',
        payload: index
    }
}

export const pizzaDecrementInCart = (index) => {
    return {
        type: 'DECREMENT_OF_PIZZA_IN_CART',
        payload: index
    }
}

export const removePizzaFromCart = (index, price, count) => {
    return {
        type: 'REMOVE_PIZZA_FROM_CART',
        payload: {index, price, count}
    }
}

export const cleanCart = () => {
    return {
        type: 'CLEAN_CART'
    }
}