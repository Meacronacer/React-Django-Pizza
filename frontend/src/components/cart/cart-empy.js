

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
                <a href="/" className="button button--black">
                <span>Go back</span>
                </a>
            </div>
            </div>
      </div>
    )
}

export default CartEmpty;