import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../components/Product';
import axios from 'axios';
import { setProducts } from '../actions/productAction';

function ProductList() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  //   console.log(products);

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => console.log(err));
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div className="ui grid container">
      <Product />
    </div>
  );
}

export default ProductList;
