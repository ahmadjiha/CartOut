import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

import EditableProduct from './EditableProduct';
import { productsReceived } from '../actions/productActions';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get('/api/products');
      dispatch(productsReceived(data));
    }

    getProducts();
  }, [dispatch]);

  return (
    <div className='product-listing'>
      <h2>Products</h2>
      {products.map(product => (
        <EditableProduct 
          key={product._id} 
          product={product}
        />
      ))}
    </div>
  );
};

export default Products;