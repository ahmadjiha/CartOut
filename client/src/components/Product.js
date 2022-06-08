
const Product = ({ product: { title, price, quantity }, setEditFormVisible }) => {

  const handleEditClick = (e) => {
    e.preventDefault()
    setEditFormVisible(true)
  }

  return (
    <div className="product-details">
      <h3>{title}</h3>
      <p className="price">${price}</p>
      <p className="quantity">{quantity} left in stock</p>
      <div className="actions product-actions">
        <a className="button add-to-cart">Add to Cart</a>
        <a href="/#" className="button edit" onClick={handleEditClick}>Edit</a>
      </div>
      <a className="delete-button"><span>X</span></a>
    </div>
  )
}

export default Product

//product, products, editable product is parent of product and edit form. products is the set of all the editable products

//
/*
Products
  EditableProduct
    Product
    EditForm
*/