import PizzaItem from "../pizza-item/pizza-item";
import { Pizzafilters, SortPopup } from "./content-top";

import { useEffect } from "react";
import { pizzaDataLoading, pizzaDataLoaded } from '../store/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { MoonLoader } from 'react-spinners'
import axios from 'axios'

const Content = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.reducer.filter)
    const sort = useSelector(state => state.reducer.sort)
    const pizzas = useSelector(state => state.reducer.pizzasData)
    const pizzasLoading = useSelector(state => state.reducer.pizzasLoading)

    useEffect(() => {
        dispatch(pizzaDataLoading('loading'))
        axios.get('http://127.0.0.1:8000/api/pizzas/')
            .then(res => dispatch(pizzaDataLoaded(res.data)))
            .then(() => dispatch(pizzaDataLoading('idle')))
            .catch(() => dispatch(pizzaDataLoading('error')))
        // eslint-disable-next-line
    }, [pizzas.length])


    const pizzaFilter = (data, filter) => {
        if (filter === 'All') {
            return data
        }

        return data.filter(item => item.category === filter)
    }

    const pizzaSortBy = (data) => {
        switch(sort) {
            case 'popularity':
                return [...data].sort((a,b) => b.rating - a.rating)
            case 'alphabet':
                    return [...data].sort((a, b) => a.name[0] > b.name[0] ? 1 : -1)
            case 'price':
                return [...data].sort((a,b) => b.prices[0] - a.prices[0])
            default :
                return data
        }
    }

    const filteredPizzas = pizzaSortBy(pizzaFilter(pizzas, filter))
                                .map(item => <PizzaItem dispatch={dispatch} key={item.id} {...item} />)

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Pizzafilters/>
                    <SortPopup/>
                </div>
                <h2 className="content__title">{filter} Pizzas</h2>
                <div className="content__items">        
                    {pizzasLoading === 'idle' ? filteredPizzas: <div style={{margin:'auto'}}><MoonLoader size={200}  color="#36d7b7" /></div>}
                </div>
            </div>
        </div>
    )
}

export default Content;