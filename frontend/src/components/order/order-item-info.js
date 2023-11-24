

const OrderItemInfo = ({name, count, size, pizzaType, price}) => {
    return (
        <div className="order-item-info">
            <p>{count} x {name} size {size} {pizzaType} | {price * count}$</p>
        </div>
    )
}


export default OrderItemInfo