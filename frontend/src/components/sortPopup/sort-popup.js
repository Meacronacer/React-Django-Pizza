import { useDispatch, useSelector } from "react-redux"
import { sortPopupChange } from '../../Redux/Slices/filterSortSlice'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { useState, useEffect, useRef, memo } from "react"

const sortPopUp = ['-popularity', 'popularity', '-price', 'price', '-alphabet', 'alphabet']

const SortPopup = memo(() => {

    const dispatch = useDispatch()
    const sort = useSelector(state => state.filterSort.sort)
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

    const sort__popup = sortPopUp.map((item, index) => {
        return <li key={index}
                   onClick={() => onSortPopupChange(item)}
                   className={sort === item ? 'active': ''} >{
                    item[0] === '-' ? `${item.substring(1)}(DESC)` : `${item} (ASC)`}</li>
    })

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                {sortPopupVisible ? <AiFillCaretDown/> : <AiFillCaretUp/>}
                <b>Sort by:</b>
                <span onClick={() => setSortPopupVisible(!sortPopupVisible)}>{
                    sort[0] === '-' ? `${sort.substring(1)} (DESC)` : `${sort} (ASC)`
                }</span>
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
})

export default SortPopup;