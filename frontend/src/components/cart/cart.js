import CartItem from "./cart-item";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiShoppingCart } from 'react-icons/fi'
import { BsChevronLeft } from 'react-icons/bs'
import { BiTrash } from 'react-icons/bi'
import { cleanCart } from "../../Redux/Slices/cartSlice";

const Cart = () => {

  const cart = useSelector(state => state.cart.cartData)
  const orderTotalcost = useSelector(state => state.cart.orderTotalcost)
  const pizzaCounter = useSelector(state => state.cart.pizzaCounter)
  const dispatch = useDispatch()


  const pizzasFromCart = cart.map((item, index) => {
    return <CartItem key={index} dispatch={dispatch} pizzaIndex={index} {...item} />
  })


  const clearCart = () => {
    if (window.confirm('are you sure you want to clear cart?')) {
      dispatch(cleanCart())
    }
  }


  return (
    <div className="content">
      <div className="container container--cart">
        <div className="cart">
          <div className="cart__top">
            <h2 className="content__title">
              <FiShoppingCart/>
              Cart
            </h2>
            <div className="cart_clean">
              <span onClick={clearCart}><BiTrash/> Clear cart</span>
            </div>
          </div>
          <div className="content__items">
               {pizzasFromCart}
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-details">
              <span>
              Count of pizzas: <b>{pizzaCounter}</b>
              </span>
              <span>
                Total cost: <b>{orderTotalcost?.toFixed(2)} $</b>
              </span>
            </div>
            <div className="cart__bottom-buttons">
              <Link
                to="/"
                className="button button--outline button--add go-back-btn"
              >
                <BsChevronLeft/>

                <span>Go back</span>
              </Link>
              <Link to='/order' className="button pay-btn">
                <span>Pay now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
