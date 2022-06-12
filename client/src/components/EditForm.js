import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { productUpdated } from '../actions/productActions';

const EditForm = ({ 
  product: {
    title,
    quantity,
    price,
    _id    
  },
  editFormVisible, 
  setEditFormVisible 
}) => {
  const dispatch = useDispatch();

  const [itemTitle, setItemTitle] = useState(title);
  const [itemPrice, setItemPrice] = useState(price);
  const [itemQuantity, setItemQuantity] = useState(quantity);
  
  const editFormDisplayValue = () => {
    return editFormVisible ? '' : 'none';
  }

  const handleCancelClick = (e) => {
    e.preventDefault();
    setEditFormVisible(false);
  }

  const handleTitleEdit = (e) => {
    e.preventDefault()
    setItemTitle(e.target.value)
  }

  const handlePriceEdit = (e) => {
    e.preventDefault()
    setItemPrice(e.target.value)
  }

  const handleQuantityEdit = (e) => {
    e.preventDefault()
    setItemQuantity(e.target.value)
  }

  const updateItem = async () => { 
    const updatedItem = await axios.put('/api/products/' + _id, {
      title: itemTitle,
      price: itemPrice,
      quantity: itemQuantity
    });

    return updatedItem.data;
  }
  
  const handleUpdate = async () => {
    try {
      const updatedItem = await updateItem();
      dispatch(productUpdated(updatedItem));
      setEditFormVisible(false);
    } catch (err) {
      console.log('updateItem failed', err)
      alert('sorry your update failed because because')
    }
  }

  return (
    <div style={{ display: editFormDisplayValue() }} className='edit-form'>
      <h3>Edit Product</h3>
      <form>
        <div className='input-group'>
          <label htmlFor='product-name'>Product Name</label>
          <input type='text' id='product-name' value={itemTitle} onChange={handleTitleEdit}/>
        </div>

        <div className='input-group'>
          <label htmlFor='product-price'>Price</label>
          <input type='text' id='product-price' value={itemPrice} onChange={handlePriceEdit} />
        </div>

        <div className='input-group'>
          <label htmlFor='product-quantity'>Quantity</label>
          <input type='text' id='product-quantity' value={itemQuantity} onChange={handleQuantityEdit}/>
        </div>

        <div className='actions form-actions'>
          <a href='/#' className='button' onClick={handleUpdate}>Update</a>
          <a href='/#' className='button' onClick={handleCancelClick}>Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default EditForm;