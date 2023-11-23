import Header from "../header/header";
import Content from "../content/content";
import Cart from '../cart/cart'
import Order from "../order/order";
import CartEmpty from "../cart/cart-empty";
import PizzaInfo from "../pizza-info/pizza-info";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {

    const cart = useSelector(state => state.cart.cartData)

    return (
        <div className="wrapper">
        <Header/>
        <Routes>
            <Route path="/" element={<Content/>} />
            <Route path="/cart" element={cart?.length > 0 ? <Cart/> : <CartEmpty/>} />
            <Route path="/order" element={<Order/>} />
            <Route path="*" element={
                <PizzaInfo 
                title='Nothing found'
                description='Unfortunately, this page is not available in our online store.'
                showButton={true}
                btnText='< go back'
                />
            } />
        </Routes>
        </div>
    )
}

export default App;