import PizzaSkeleton from './pizza-skeleton-item'

const PizzaSkeletonList = () => {
    return (
            <div className='content__items'>
                {[...new Array(4)].map((_, index) => <PizzaSkeleton key={index}/>)                }
            </div>
        )
}

export default PizzaSkeletonList