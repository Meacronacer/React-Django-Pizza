import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { addPizzaToCart } from "../cart/cartSlice";

const PizzaItem = ({id, name, imageUrl, prices, sizes, dispatch}) => {

  const [pizzaType, setPizzaType] = useState('thin')
  const [pizzaSize, setPizzaSize] = useState(0)

  const addPizzaToCartHandler = (pizza) => {
      pizza.price = prices[pizzaSize]
      pizza.size = sizes[pizzaSize]
      
      dispatch(addPizzaToCart(pizza))
  }

  const onClickChangePizzaTypeOrSize = (type, payload) => {
      if (type === 'type') {
        setPizzaType(payload)
      } else {
        setPizzaSize(payload)
      }
  }

  const pizzeType = ['thin', 'traditional'].map((item, index) => {
          return <li 
                  className={pizzaType === item ? 'active' : ''}
                  key={index}
                  onClick={() => onClickChangePizzaTypeOrSize('type', item)}
                  >{item}</li>
        })
  
  const pizzeSize = sizes.map((item, index) => {
      return <li 
              className={pizzaSize === index ? 'active' : ''}
              key={index}
              onClick={() => onClickChangePizzaTypeOrSize('Size', index)}
              >{item} size</li>
    })
  
  return (
    <>
      <div className="pizza-block">
        <img
          className="pizza-block__image"
          src={imageUrl}
          alt="Pizza"
        />
        <h4 className="pizza-block__title">{name}</h4>
        <div className="pizza-block__selector">
          <ul>
            {pizzeType}
          </ul>
          <ul>
            {pizzeSize}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">{parseFloat(prices[pizzaSize]).toFixed(2)} $</div>
          <div onClick={() => addPizzaToCartHandler({id, name, imageUrl, pizzaType, size: sizes, price: prices })}
               className="button button--outline button--add">
              <FaPlus size={14} />
              <span>Add to cart</span>
            <i>1</i>
          </div>
        </div>
      </div>
    </>
  );
};

export default PizzaItem;
