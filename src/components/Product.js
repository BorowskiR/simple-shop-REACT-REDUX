import React from 'react';
import { useSelector } from 'react-redux';

function Product() {
  const products = useSelector((state) => state.allProducts.products);
  const renderedList = products.map(({ price, title, id, category, image }) => {
    return (
      <div className="four wide column" key={id}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{renderedList}</>;
}

export default Product;
