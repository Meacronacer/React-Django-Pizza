import { memo } from 'react'
import { Link } from "react-router-dom";
import { BsCart3 } from 'react-icons/bs'
import { useSelector } from "react-redux";


const CartBtn = memo(() => {

    const {orderTotalcost, pizzaCounter} = useSelector((state) => state.cart)

    return (
        <div className="header__cart">
            <Link to='/cart' className="button button--cart">
              <span>{orderTotalcost.toFixed(2)} $</span>
              <div className="button__delimiter"></div>
              <BsCart3 size={24}/>
              <span>{pizzaCounter}</span>
            </Link>
          </div>
    )
})


export default CartBtn;