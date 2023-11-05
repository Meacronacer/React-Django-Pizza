import CartItem from "./cart-item";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiShoppingCart } from 'react-icons/fi'
import { BsChevronLeft } from 'react-icons/bs'
import { BiTrash } from 'react-icons/bi'
import { cleanCart } from "../store/actions/actions";

const Cart = () => {

    const cart = useSelector(state => state.cart)
    const orderTotalcost = useSelector(state => state.orderTotalcost)
    const pizzaCounter = useSelector(state => state.pizzaCounter)
    const dispatch = useDispatch()


    const pizzasFromCart = cart.map((item, index) => {
      console.log(item)
      return <CartItem key={index} pizzaIndex={index} {...item} />
    })

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
              <span onClick={() => dispatch(cleanCart())}><BiTrash/> Clear cart</span>
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
                Total cost: <b>{orderTotalcost.toFixed(2)} $</b>
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
              <div className="button pay-btn">
                <span>Pay now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
