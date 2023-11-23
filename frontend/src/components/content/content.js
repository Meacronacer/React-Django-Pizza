import PizzaList from "../pizza-List/pizza-list";
import { category } from "../filter/filter";
import { useSelector } from 'react-redux'
import Pizzafilters from "../filter/filter";
import SortPopup from "../sortPopup/sort-popup";

const Content = () => {
    const filter = useSelector(state => state.filterSort.filter)

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Pizzafilters/>
                    <SortPopup/>
                </div>
                <h2 className="content__title">{category[filter-1]} Pizzas</h2>
                <PizzaList/>
            </div>
        </div>
    )
}

export default Content;