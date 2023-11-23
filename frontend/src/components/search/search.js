import { useMemo, useRef, useState, memo } from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";
import { setSearch } from "../../Redux/Slices/filterSortSlice";
import { useDispatch } from "react-redux";
import debounce from 'lodash.debounce'

const Search = memo(() => {
    const inputRef = useRef()
    const dispatch = useDispatch()

    const [value, setValue] = useState('')

    const updateValue = useMemo(
        () => 
        debounce((str) => {
            dispatch(setSearch(str))
        }, 1000),
     [dispatch])

    const onClearSearch = () => {
        setValue('')
        updateValue('')
        inputRef.current.focus()
    }

    const onChangeValue = (e) => {
        setValue(e.target.value)
        updateValue(e.target.value)
    }

    return (
        <>
            <div className="wrap">
                <div className="search">
                    {value.length > 0 && 
                    <button 
                    onClick={onClearSearch}
                    style={{'position': 'absolute', 'top': '8px', 'right': '8px'}}>
                        <MdOutlineClear size={20}/>
                    </button>}
                    <input
                     ref={inputRef}
                     value={value}
                     onChange={onChangeValue}
                     type="text" 
                     className="searchTerm" 
                     placeholder="Search pizzas..."/>
                    <button type="submit" className="searchButton">
                        <FaSearch />
                    </button>
                </div>
            </div>
        </>
    )
})

export default Search;