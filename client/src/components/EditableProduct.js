import { useState } from 'react';
import Product from './Product';
import EditForm from './EditForm';

const EditableProduct = ({ product }) => {
  const [editFormVisible, setEditFormVisible] = useState(false);

  return (
    <div className='product'>
      <Product
        product={product}
        setEditFormVisible={setEditFormVisible} 
      />
      <EditForm  
        product={product}
        editFormVisible={editFormVisible} 
        setEditFormVisible={setEditFormVisible} 
      />
    </div>
  );
};

export default EditableProduct;