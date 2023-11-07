

const initialState = {
    'pizzasData': [],
    'pizzasLoading': 'idle',
    'filter': 'All',
    'sort': 'popularity',
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