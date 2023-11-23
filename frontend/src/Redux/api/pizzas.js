import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const ordering = {
    '-popularity': '-rating',
    'popularity': 'rating',
    '-price': '-by_price',
    'price': 'by_price',
    '-alphabet': '-name',
    'alphabet': 'name',
}


export const pizzaApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/' }),
    endpoints: (builder) => ({
        listPizzas: builder.query({
            query: ({currentPage, filter, sort, search}) =>
            `pizzas/?${
                filter === 1 ? '' : `category=${filter}&`
            }ordering=${
                ordering[sort]
            }&page=${currentPage}${
                search && `&search=${search}`
            }`
        }),
        createPizzaOrder: builder.mutation({
            query: (order) => ({
                url: 'orders/',
                method: 'POST',
                body: order
            })
        }) 
    })
})


export const { useListPizzasQuery, useCreatePizzaOrderMutation } = pizzaApi