import {useState} from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { newProductCreated } from '../actions/productActions';


const AddProductForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [formVisible, setFormVisible] = useState(false);

  const clearFormFields = () => {
    setTitle('');
    setPrice('');
    setQuantity('');
  };

  const formVisibleValue = (isVisible) => {
    if (!isVisible) {
        return 'add-form';
    }

    return 'add-form visible';
  };

  const handleTitleEdit = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handlePriceEdit = (e) => {
    e.preventDefault();
    setPrice(e.target.value);
  };

  const handleQuantityEdit = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setFormVisible(false);
    clearFormFields();
  };

  const handleAddProductButton = (e) => {
    e.preventDefault();
    setFormVisible(true);
  };

  const createNewProduct = async (title, price, quantity) => {
    const newProduct = await axios.post('/api/products/', {title: title, price: price, quantity});
    return newProduct.data;
  };

  const handleAddProduct = async (e) => {
    try {
      const newProduct = await createNewProduct(title, price, quantity);
      dispatch(newProductCreated(newProduct));
      setFormVisible(false);
      clearFormFields();
    } catch (err) {
      console.log('error with handleAddProduct', err);
      alert('failed to add product');
    }
  };

  return (
    <div className={formVisibleValue(formVisible)}>
      <p><a href='/#' className='button add-product-button' onClick={handleAddProductButton}>Add A Product</a></p>
      <h3>Add Product</h3>
      <form>
        <div className='input-group'>
          <label htmlFor='product-name'>Product Name</label>
          <input type='text' id='product-name' value={title} onChange={handleTitleEdit}/>
        </div>

        <div className='input-group'>
          <label htmlFor='product-price'>Price</label>
          <input type='text' id='product-price' value={price} onChange={handlePriceEdit} />
        </div>

        <div className='input-group'>
          <label htmlFor='product-quantity'>Quantity</label>
          <input type='text' id='product-quantity' value={quantity} onChange={handleQuantityEdit} />
        </div>

        <div className='actions form-actions'>
          <a href='/#' className='button' onClick={handleAddProduct}>Add</a>
          <a href='/#' className='button' onClick={handleCancelClick}>Cancel</a>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;