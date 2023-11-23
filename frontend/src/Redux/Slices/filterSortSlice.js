import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    'filter': 1,
    'sort': '-popularity',
    'search': '',
    'currentPage': 1,
}


const filterSortSlice = createSlice({
    name :'filterSort',
    initialState: initialState,
    reducers: {
        filterChange: (state, action) => {
             state.filter = action.payload
        },
        sortPopupChange: (state, action) => {
            state.sort = action.payload
        },
        currentPageChange: (state, action) => {
            state.currentPage = action.payload
        },
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setUrlProperty: (state, action) => {
            state.currentPage = Number(action.payload.currentPage)
            state.filter = Number(action.payload.filter)
            state.sort = action.payload.sort
        }
    }
})

export default filterSortSlice.reducer
export const {filterChange, sortPopupChange, currentPageChange, setSearch, setUrlProperty} = filterSortSlice.actions