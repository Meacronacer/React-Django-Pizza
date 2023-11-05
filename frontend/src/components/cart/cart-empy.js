

const CartEmpty = () => {
    return (
        <div class="content">
            <div class="container container--cart">
            <div class="cart cart--empty">
                <h2>Cart is empty  <icon>😕</icon></h2>
                <p>
                Most likely, you haven't ordered pizza yet.<br />
                To order pizza, go to the main page.
                </p>
                <img src="/img/empty-cart.png" alt="Empty cart" />
                <a href="/" class="button button--black">
                <span>Go back</span>
                </a>
            </div>
            </div>
      </div>
    )
}

export default CartEmpty;