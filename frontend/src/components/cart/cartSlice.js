import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    'cartData': [],
    'orderTotalcost': 0,
    'pizzaCounter': 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addPizzaToCart: (state, action) => {
            let findEqualPizzaInCart = false 
            state.cartData.map(item => {
                if (item.id === action.payload.id
                    && item.pizzaType === action.payload.pizzaType
                    && item.size === action.payload.size
                    && item.price === action.payload.price) {
                    findEqualPizzaInCart = true
                    item.count = (item.count + 1) || 2
                }
                return item
            })
            if (!findEqualPizzaInCart) {
                action.payload.count = 1
                state.cartData.push(action.payload)
            }
            state.pizzaCounter = state.pizzaCounter + 1
            state.orderTotalcost = state.orderTotalcost + action.payload.price
        },
        removePizzaFromCart: (state, action) => {
            state.cartData = state.cartData.filter((_, index) => index !== action.payload.index)
            state.orderTotalcost = state.orderTotalcost - action.payload.price
            state.pizzaCounter = state.pizzaCounter - action.payload.count
        },
        incrementPizzaInCart: (state, action) => {
            state.cartData[action.payload].count = state.cartData[action.payload].count + 1
            state.orderTotalcost = state.orderTotalcost + state.cartData[action.payload].price
            state.pizzaCounter = state.pizzaCounter + 1
        },
        decrementPizzaInCart: (state, action) => {
            if (state.cartData[action.payload].count > 1) {
                state.cartData[action.payload].count = state.cartData[action.payload].count - 1
                state.orderTotalcost = state.orderTotalcost - state.cartData[action.payload].price
                state.pizzaCounter = state.pizzaCounter - 1
            }
        },
        cleanCart: (state) => {
            state.cartData = []
            state.orderTotalcost = 0.00
            state.pizzaCounter = 0
        }

    }
})

export const {addPizzaToCart,
              removePizzaFromCart,
              incrementPizzaInCart,
              decrementPizzaInCart,
              cleanCart,
            } = cartSlice.actions

export default cartSlice.reducer
