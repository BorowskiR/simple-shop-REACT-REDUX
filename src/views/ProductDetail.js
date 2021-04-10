import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../actions/productAction';

function ProductDetail() {
  const product = useSelector((state) => state.product);
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => console.log('Err ', err));
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (id && id !== '') fetchProductDetails();
  }, [id]);

  return (
    <div>
      <h1>ProductDetail</h1>
    </div>
  );
}

export default ProductDetail;
