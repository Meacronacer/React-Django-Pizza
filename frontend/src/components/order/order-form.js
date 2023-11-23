import { useState } from "react"
import { useCreatePizzaOrderMutation } from "../../Redux/api/pizzas"
import { useNavigate } from "react-router-dom"
import { cleanCart } from "../../Redux/Slices/cartSlice"
import { useDispatch } from "react-redux"



const OrderForm = ({cartData, orderTotalcost}) => {

    const [userName, setUserName] = useState('')
    const [phone, setPhone] = useState('')
    const [payment, setPayment] = useState('Cash')
    const [orderType, setOrderType] = useState('Delivery')
    const [address, setAddress] = useState('')

    const [createPizzaOrder] = useCreatePizzaOrderMutation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const formHandler = (e) => {
        e.preventDefault()

        const order = {
            pizzas: cartData.map(item => {
                const {count, name, size, pizzaType, price} = item
                return `${count} x ${name} size ${size} ${pizzaType} | ${(price * count).toFixed(2)} $`
            }),
            name: userName,
            phone_number: phone,
            total: parseFloat(orderTotalcost.toFixed(2)),
            address: address
        }

        createPizzaOrder(order).unwrap().then(() => {
            alert('You have successfully placed your order, we will contact you soon')
            dispatch(cleanCart())
            navigate('/')
        }).catch(() => alert('Sorry, failed to create an order'))
        console.log(order)
    }

    return (
        <form onSubmit={(e) => formHandler(e)}>
            <ul className="form-style-1">
                <li>
                    <label>Name <span className="required">*</span></label>
                    <input 
                        onChange={(e) => setUserName(e.target.value)}
                        required
                        value={userName} 
                        type="text" 
                        name="name" 
                        className="field-long" 
                    />
                </li>
       
                <li>
                    <label>Phone <span className="required">*</span></label>
                    <input
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="number" 
                        name="phone" 
                        className="field-long" 
                     />
                </li>
                <li>
                    <label>Order Type</label>
                    <select
                        value={orderType}
                        onChange={(e) => setOrderType(e.target.value)}
                        name="orderType" 
                        className="field-select"
                     >
                        <option value="Delivery">Delivery</option>
                        <option value="Pickup">Pickup</option>
                    </select>
                </li>
                <li>
                    <label>Payment</label>
                    <select 
                    value={payment}
                    onChange={(e) => setPayment(e.target.value)}
                    name="paymant" 
                    className="field-select"
                    >
                        <option value="Advertise">Cash</option>
                        <option disabled value="Partnership">Visa (not working yet) </option>
                    </select>
                </li>
                {orderType === 'Delivery' && 
                    <li>
                        <label>Address</label>
                        <textarea 
                            required
                            value={address}
                            onChange={(e) => setAddress(e.target.value)} 
                            name="address" 
                            id="field5" 
                            className="field-long field-textarea">
                        </textarea>
                    </li>
                }
                <li>
                    <button 
                     className="button button--cart"
                     type="submit"
                     >Submit</button>
                </li>
            </ul>
        </form>
    )

}


export default OrderForm;