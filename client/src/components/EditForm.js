
import { useState } from 'react';

const updateItem = () => {
  
}

const EditForm = ({ product : { title, price, quantity }, editFormVisible, setEditFormVisible }) => {
  const [itemTitle, setItemTitle] = useState(title);
  const [itemPrice, setItemPrice] = useState(price);
  const [itemQuantity, setItemQuantity] = useState(quantity);
  
  const editFormDisplayValue = () => {
    return editFormVisible ? "" : "none";
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

  return (
    <div style={{ display: editFormDisplayValue() }} className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" value={itemTitle} onChange={handleTitleEdit}/>
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input type="text" id="product-price" value={itemPrice} onChange={handlePriceEdit} />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={itemQuantity} onChange={handleQuantityEdit}/>
        </div>

        <div className="actions form-actions">
          <a className="button">Update</a>
          <a className="button" onClick={handleCancelClick}>Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default EditForm;