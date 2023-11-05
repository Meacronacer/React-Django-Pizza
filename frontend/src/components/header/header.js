import { Link, useNavigate } from "react-router-dom";
import { BsCart3 } from 'react-icons/bs'
import { useSelector } from "react-redux";

const Header = () => {

    const orderTotalcost = useSelector(state => state.orderTotalcost)
    const pizzaCounter = useSelector(state => state.pizzaCounter)
    const navigate = useNavigate()

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
          <div className="header__cart">
            <Link to='/cart' className="button button--cart">
              <span>{orderTotalcost.toFixed(2)} $</span>
              <div className="button__delimiter"></div>
              <BsCart3 size={24}/>
              <span>{pizzaCounter}</span>
            </Link>
          </div>
        </div>
      </div>
    )
}

export default Header;