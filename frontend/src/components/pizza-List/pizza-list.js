import PizzaSkeletonList from '../skeleton/pizza-skeleton-list';
import PizzaItem from '../pizza-item/pizza-item'
import Pagination from '../pagination/pagination';
import PizzaInfo from '../pizza-info/pizza-info';
import qs from 'qs'
import { useNavigate } from 'react-router-dom'
import { useListPizzasQuery } from "../../Redux/api/pizzas";
import { useDispatch, useSelector } from 'react-redux';
import { currentPageChange, setUrlProperty } from '../../Redux/Slices/filterSortSlice';
import { useEffect, useRef } from 'react';


const PizzaList = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isNotMounted = useRef(true)

    const {filter, sort, currentPage, search} = useSelector((state) => state.filterSort)
    const { data: pizzaList = [], isLoading, isError } = useListPizzasQuery({filter, sort, currentPage, search}, {
        skip: isNotMounted.current
    })


    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            dispatch(setUrlProperty(params))
        } 
        isNotMounted.current = false
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (!isNotMounted.current) {
            const queryString = qs.stringify({
                filter,
                sort,
                currentPage,
            })
            if (filter === 1 && currentPage === 1 && sort === '-popularity') {
                navigate('/')
            } else {
                navigate(`?${queryString}`)
            }   

        }
        // eslint-disable-next-line
    }, [currentPage, filter, sort])


    const onPageChange = (number) => {
        dispatch(currentPageChange(number))
    }

    if (isLoading) {
        return <PizzaSkeletonList/>
    } else if (isError) {
        return <PizzaInfo 
            title='something went wrong'
            description='Sorry, failed to load data, try one more time'
            clickHandler={() => window.location.reload()}
            showButton={true}
            />
    }

    const filteredPizzas = pizzaList.results &&
          pizzaList.results.map(item => <PizzaItem dispatch={dispatch} key={item.id} {...item} />)

    return (
        <>
        <div className="content__items">        
            {search && filteredPizzas.length === 0 ? 
            <PizzaInfo title='Sorry, no pizzas were found for this request.'/>:
            filteredPizzas
            }
        </div>
        <Pagination onPageChange={onPageChange} count={pizzaList.count}/>
        </>
    )
}

export default PizzaList