import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Product() {
  const product = useSelector((state) => state.allProducts.products);
  const { id, title } = product[0];

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => console.log(err));
    console.log(response);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="four column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <div className="header">{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
