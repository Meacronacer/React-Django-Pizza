import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';

const Pagination = ({onPageChange, count}) => {
    
    const currentPage = useSelector(state => state.filterSort.currentPage)
    const pageCount = Math.ceil(count <= 4 ? 0 : count / 4) || 1

    return (
        <ReactPaginate
        forcePage={currentPage-1}
        className='pagination'
        breakLabel="..."
        nextLabel=">>"
        onPageChange={(event) => onPageChange(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        />
    );
}



export default Pagination;