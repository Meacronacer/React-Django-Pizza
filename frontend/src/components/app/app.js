import Header from "../header/header";
import Content from "../content/content";
import Cart from '../cart/cart'
import CartEmpty from "../cart/cart-empy";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {

    const cart = useSelector(state => state.cart).length

    return (
        <div className="wrapper">
        <Header/>
        <Routes>
            <Route path="/" element={<Content/>} />
            <Route path="/cart" element={cart > 0 ? <Cart/> : <CartEmpty/>} />
        </Routes>
        </div>
    )
}

export default App;