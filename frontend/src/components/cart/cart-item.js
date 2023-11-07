import { AiOutlineClose } from 'react-icons/ai'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { incrementPizzaInCart, decrementPizzaInCart, removePizzaFromCart } from './cartSlice';

const CartItem = ({pizzaIndex, name, imageUrl, pizzaType, price, size, count, dispatch}) => {

    const pizzaCounterMutation = (type) => {
        if (type === '+') {
            dispatch(incrementPizzaInCart(pizzaIndex))
        } else {
            dispatch(decrementPizzaInCart(pizzaIndex))
        }
    }

    const onPizzaRemoveFromCart = (index, price, count) => {
        dispatch(removePizzaFromCart({index, price, count}))
    } 

    return (
        <div className="cart__item">
        <div className="cart__item-img">
            <img
            className="pizza-block__image"
            src={imageUrl}
            alt="Pizza"
            />
        </div>
        <div className="cart__item-info">
            <h3>{name}</h3>
            <p>{pizzaType} dough, {size} size</p>
        </div>
        <div className="cart__item-count">
            <div onClick={pizzaCounterMutation} className="button button--outline button--circle">
            <BiMinus />
            </div>
            <b>{count}</b>
            <div onClick={() => pizzaCounterMutation('+')} 
            className="button button--outline button--circle cart__item-count-plus">
            <BiPlus />
            </div>
        </div>
        <div className="cart__item-price">
            <b>{(price * count).toFixed(2)} $</b>
        </div>
        <div className="cart__item-remove">
            <div onClick={() => onPizzaRemoveFromCart(pizzaIndex, price * count, count)} 
            className="button button--outline button--circle">
                <AiOutlineClose />
            </div>
        </div>
        </div>
    );
};


export default CartItem;
