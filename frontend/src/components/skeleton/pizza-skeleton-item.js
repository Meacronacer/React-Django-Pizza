import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <div className="pizza-block">
        <ContentLoader 
            speed={2}
            width={280}
            height={465}
            viewBox="0 0 280 465"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="125" cy="125" r="125" /> 
            <rect x="0" y="265" rx="0" ry="0" width="280" height="28" /> 
            <rect x="0" y="310" rx="8" ry="8" width="280" height="87" /> 
            <rect x="0" y="420" rx="0" ry="0" width="90" height="35" /> 
            <rect x="121" y="414" rx="20" ry="20" width="161" height="46" />
        </ContentLoader>
  </div>
)

export default MyLoader

