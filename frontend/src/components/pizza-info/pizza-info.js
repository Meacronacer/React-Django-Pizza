import { Link } from "react-router-dom";


const PizzaInfo = ({title, description, btnText ='Reload', clickHandler = null, showButton = false}) => {
    return (
        <div className="page-not-found">
          <h1>
            <span>😕</span>
            <br />
            {title}
          </h1>
          <p className="description">
            {description}
          </p>
          {showButton && <Link
              onClick={clickHandler}
              style={{'marginTop': '23px'}}
              to="/"
              className="button button--outline button--add go-back-btn"
              >  
              <span style={{'fontSize': '22px'}}>{btnText}</span>
          </Link>
          }
        </div>
    )
}

export default PizzaInfo;