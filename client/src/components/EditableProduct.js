import { useState } from 'react';
import Product from './Product';
import EditForm from './EditForm';

const EditableProduct = ({ product, cartItems, setCartItems }) => {
  // const [product2, setProduct] = useState(product);
  const [editFormVisible, setEditFormVisible] = useState(false);

  return (
    <div className='product'>
      <Product
        product={product}
        setEditFormVisible={setEditFormVisible} 
        setCartItems={setCartItems}
        cartItems={cartItems}
        // setProduct={setProduct}
      />
      <EditForm  
        product={product}
        editFormVisible={editFormVisible} 
        setEditFormVisible={setEditFormVisible} 
      />
    </div>
  )
}

export default EditableProduct;