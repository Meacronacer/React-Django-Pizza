import { useDispatch, useSelector } from "react-redux"
import { filterChange, currentPageChange } from '../../Redux/Slices/filterSortSlice'

export const category = [ 'All','Meat','Vegetarian', 'Grill','Spicy','Closed']


const Pizzafilters = () => {
    const filter = useSelector(state => state.filterSort.filter)
    const currentPage = useSelector(state => state.filterSort.currentPage)
    const dispatch = useDispatch()

    const onFilterChange = (filter) => {
        dispatch(filterChange(filter))
        if (currentPage !== 1) {
            dispatch(currentPageChange(1))
        }
    }

    const pizzaFiltered = category.map((item, index) => {
                            return <li key={index}
                                        onClick={() => onFilterChange(index+1)}
                                        className={filter === index+1 ? 'active' : ''}>{item}</li>
                            })

    return (<div className="categories">
                <ul>
                {pizzaFiltered}
                </ul>
            </div>)
}

export default Pizzafilters