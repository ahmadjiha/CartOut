import { useState } from 'react';
import Product from "./Product";
import EditForm from "./EditForm";



const EditableProduct = ({ product, deleteFromItems, cartItems, setCartItems }) => {
  const [product2, setProduct] = useState(product)
  const [editFormVisible, setEditFormVisible] = useState(false);

  return (
    <div className="product">
      <Product
        product={product2}
        setEditFormVisible={setEditFormVisible} 
        deleteFromItems={deleteFromItems}
        setCartItems={setCartItems}
        cartItems={cartItems}
        setProduct={setProduct}
      />
      <EditForm  
        product={product2}
        setProduct={setProduct}
        editFormVisible={editFormVisible} 
        setEditFormVisible={setEditFormVisible} 
      />
    </div>
  )
}

export default EditableProduct;