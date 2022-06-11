import Item from './Item';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkoutCart, cartItemsReceived } from '../actions/cartActions';

const getCartTotal = (items) => items.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)

  useEffect(() => {
    const getCart = async () => {
      const { data } = await axios.get('http://localhost:5001/api/cart');
      dispatch(cartItemsReceived(data));
    }

    getCart();
  }, [dispatch]);

  const checkout = async () => {
    const deletedItems = await axios.post("/api/checkout")
    return deletedItems
  }
  
  const handleCheckout = async (e) => {
    e.preventDefault();
    try {
      await checkout() 
      dispatch(checkoutCart());
    } catch (err) {
      console.log("checkout failed: ", err)
      alert("Checkout failed")
    }
  }

  const checkoutButtonClass = () => {
    if (cart.length > 0) {
      return 'button checkout'
    }
    return 'button checkout disabled'
  }

  return ( 
    <div className='cart'>
      <h2>Your Cart</h2>
      {cart.length === 0 &&
      <>
        <p>Your cart is empty</p>
        <br />
        <p>Total: $0</p>
      </>
      }
      {cart.length > 0 &&
      <table className='cart-items'>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
            {cart.map( item => (
              <Item key={item._id} title={item.title} quantity={item.quantity} price={item.price} />
            ))}
          <tr>
            <td colSpan="3" className="total">Total: ${getCartTotal(cart)}</td>
          </tr>
        </tbody>
      </table>
      }
      <a className={checkoutButtonClass()} onClick={handleCheckout}>Checkout</a>
    </div> 
  );
}

export default Cart;