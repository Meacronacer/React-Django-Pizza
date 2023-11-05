

const initialState = {
    'pizzasData': [],
    'pizzasLoading': 'idle',
    'filter': 'All',
    'sort': 'popularity',
    'orderTotalcost': 0,
    'pizzaCounter': 0,
    'cart': []
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PIZZAS_DATA_LOADING':
            return {
                ...state,
                pizzasLoading: action.payload
            }
        case 'PIZZAS_DATA_LOADED':
            return {
                ...state,
                pizzasData: [...action.payload]
            }
        case 'ADD_PIZZA_TO_CART':
            let findEqualPizzaInCart = false 
            state.cart.map(item => {
                if (item.id === action.payload.id
                    && item.pizzaType === action.payload.pizzaType
                    && item.size === action.payload.size
                    && item.price === action.payload.price) {
                    console.log('find equal pizza in cart +1')
                    item.count = (item.count + 1) || 2
                    findEqualPizzaInCart = true
                }
                return item
            })
            return {
                ...state,
                cart: findEqualPizzaInCart ? [...state.cart] : [...state.cart, {...action.payload, count: 1}],
                orderTotalcost: state.orderTotalcost + action.payload.price,
                pizzaCounter: state.pizzaCounter + 1
            }
        case 'REMOVE_PIZZA_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter((item, index) => index !== action.payload.index),
                orderTotalcost: +state.orderTotalcost - action.payload.price,
                pizzaCounter: state.pizzaCounter - action.payload.count
            }
        case 'INCREMENT_OF_PIZZA_IN_CART':
            state.cart[action.payload].count = state.cart[action.payload].count + 1
            return {
                ...state,
                cart: [...state.cart],
                orderTotalcost: state.orderTotalcost + state.cart[action.payload].price,
                pizzaCounter: state.pizzaCounter + 1
            }
        case 'DECREMENT_OF_PIZZA_IN_CART':
            if (state.cart[action.payload].count === 1) {
                return {...state}
            }
            state.cart[action.payload].count = state.cart[action.payload].count - 1
            return {
                ...state,
                cart: [...state.cart],
                orderTotalcost: state.orderTotalcost - state.cart[action.payload].price,
                pizzaCounter: state.pizzaCounter - 1
            }
        case 'CLEAN_CART':
            return {
                ...state,
                cart: [],
                orderTotalcost: 0.00,
                pizzaCounter: 0
            }
        case 'FILTER_CHANGE':
            return {
                ...state,
                filter: action.payload
            }
        case 'SORT_POPUP_CHANGE':
            return {
                ...state,
                sort: action.payload
            }

        default: return state
    }
}

export default reducer;