import axios from 'axios';
import { useDispatch } from 'react-redux';

import { productDeleted, productAddedToCart } from '../actions/productActions';

const Product = ({
  product: {title, price, quantity, _id},
  setEditFormVisible,
}) => {
  const dispatch = useDispatch();

  const getAddToCartButtonClass = () => {
    if (quantity > 0) {
      return 'button add-to-cart';
    }

    return 'button add-to-cart disabled';
  };
  
  const handleEditClick = (e) => {
    e.preventDefault();
    setEditFormVisible(true);
  };

  const deleteProduct = async (id) => {
    const deleteOutput = await axios.delete('/api/products/' + id);
    return deleteOutput;
  };

  const handleDeleteClick = async (e) => {
    e.preventDefault();
    try {
      await deleteProduct(_id);
      dispatch(productDeleted(_id));
    } catch (err) {
      console.log('delete failed: ', err);
      alert('delete failed');
    }
  };

  const addProductToCart = async () => {
    const postOutput = await axios.post('/api/add-to-cart', { productId: _id });
    return postOutput.data;
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();

    try {
      const { product: updatedProduct, item: updatedCartItem } = await addProductToCart();
      dispatch(productAddedToCart(updatedProduct, updatedCartItem));
    } catch (err) {
      console.log('Update cart item failed', err);
      alert('Update cart item failed');
    }
  };

  return (
    <div className='product-details'>
      <h3>{title}</h3>
      <p className='price'>${price}</p>
      <p className='quantity'>{quantity} left in stock</p>
      <div className='actions product-actions'>
        <a href='/#' className={getAddToCartButtonClass()} onClick={handleAddToCart}>Add to Cart</a>
        <a href='/#' className='button edit' onClick={handleEditClick}>Edit</a>
      </div>
      <a href='/#' className='delete-button' onClick={handleDeleteClick}><span>X</span></a>
    </div>
  );
};

export default Product;