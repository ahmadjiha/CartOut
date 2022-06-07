import Item from './Item';

const getCartTotal = (items) => items.reduce((prev, curr) => prev + curr.price * curr.quantity, 0)

const Cart = ({ items }) => {
  return ( 
    <div className='cart'>
      <h2>Your Cart</h2>
      <table className='cart-items'>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
            {items.map( item => (
              <Item key={item._id} title={item.title} quantity={item.quantity} price={item.price} />
            ))}
          <tr>
            <td colSpan="3" className="total">Total: ${getCartTotal(items)}</td>
          </tr>
        </tbody>
      </table>
      <a className='button checkout'>Checkout</a>
    </div> 
  );
}

export default Cart;