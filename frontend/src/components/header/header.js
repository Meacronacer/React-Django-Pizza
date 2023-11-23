import React, {memo} from 'react'
import Search from '../search/search';
import { useLocation, useNavigate } from "react-router-dom";
import CartBtn from '../cart/cart-button';

const Header = memo(() => {

    const navigate = useNavigate()
    const { pathname } = useLocation()

    return (
        <div className="header">
        <div className="container">
          <div className="header__logo">
            <img width="38" src="./img/pizza-logo.svg" alt="Pizza logo" />
            <div>
              <h1 className="react-pizza-title" onClick={() => navigate('/')}>React Pizza</h1>
              <p>the most delicious pizza in the universe</p>
            </div>
          </div>
          {['/cart', '/order'].includes(pathname) ? null : <Search/>}
          <CartBtn/>
        </div>
      </div>
    )
})

export default Header;