import { useDispatch, useSelector } from "react-redux"
import { filterChange, sortPopupChange } from "../store/actions/actions"
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { useState, useEffect, useRef } from "react"

export const Pizzafilters = () => {
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const onFilterChange = (filter) => {
        dispatch(filterChange(filter))
    }

    const pizzaFiltered = [ 'All','Meat','Vegetarian', 'Grill','Spicy','Closed']
                            .map((item, index) => {
                            return <li key={index}
                                        onClick={() => onFilterChange(item)}
                                        className={filter === item ? 'active' : ''}>{item}</li>
                            })

    return (<div className="categories">
                <ul>
                {pizzaFiltered}
                </ul>
            </div>)
}


export const SortPopup = () => {

    const dispatch = useDispatch()
    const sort = useSelector(state => state.sort)
    const [sortPopupVisible, setSortPopupVisible] = useState(false)
    const sortRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (sortRef.current && !sortRef.current.contains(event.target)) {
            setSortPopupVisible(false)
          }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => document.removeEventListener('click', handleClickOutside, true);
      }, [])

    const onSortPopupChange = (sortBy) => {
        dispatch(sortPopupChange(sortBy))
        setSortPopupVisible(false)
    }

    const sort__popup = ['popularity', 'price', 'alphabet'].map((item, index) => {
        return <li key={index}
                   onClick={() => onSortPopupChange(item)}
                   className={sort === item ? 'active': ''} >{item}</li>
    })

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                {sortPopupVisible ? <AiFillCaretDown/> : <AiFillCaretUp/>}
                <b>Sort by:</b>
                <span onClick={() => setSortPopupVisible(!sortPopupVisible)}>{sort}</span>
            </div>
                {sortPopupVisible ? 
                    <div className="sort__popup">
                        <ul>
                            {sortPopupVisible ? sort__popup : ''}
                        </ul>
                        </div>: null
                }
        </div>
    )
}