import { useSelector } from "react-redux"
import OrderForm from "./order-form"
import OrderItemInfo from "./order-item-info"


const Order = () => {

    const {cartData, orderTotalcost} = useSelector((state) => state.cart)

    return (
        <div style={{'display': 'flex'}}>
            <OrderForm cartData={cartData} orderTotalcost={orderTotalcost} />
            <div className="order-items">
                <h3 style={{'margin': '6px'}}>Your Order</h3>
                <hr/>
                {
                    cartData?.map((item, index) => <OrderItemInfo key={index} {...item} />)
                }
            <hr/>
            <b className="order-item-info">Total: {orderTotalcost.toFixed(2)} $</b>
            </div>
        </div>
    )
}

export default Order