import { Link } from "react-router-dom";


const CartEmpty = () => {
    return (
        <div className="content">
            <div className="container container--cart">
            <div className="cart cart--empty">
                <h2>Cart is empty 😕</h2>
                <p>
                Most likely, you haven't ordered pizza yet.<br />
                To order pizza, go to the main page.
                </p>
                <img src="/img/empty-cart.png" alt="Empty cart" />
                <Link to='/' className="button button--black">
                <span>Go back</span>
                </Link>
            </div>
            </div>
      </div>
    )
}

export default CartEmpty;