import axios from "axios";

const Product = ({
  product: {title, price, quantity, _id},
  setEditFormVisible,
  deleteFromItems,
  cartItems,
  setCartItems,
  setProduct }) => {

  const getAddToCartButtonClass = () => {
    if (quantity > 0) {
      return "button add-to-cart";
    }

    return "button add-to-cart disabled";
  }
  
  const handleEditClick = (e) => {
    e.preventDefault()
    setEditFormVisible(true)
  }

  const deleteProduct = async () => {
    const deleteOutput = await axios.delete("/api/products/" + _id)
    return deleteOutput
  }

  const handleDeleteClick = (e) => {
    e.preventDefault()
    try {
      deleteProduct()
      deleteFromItems(_id)
    } catch (err) {
      console.log("delete failed: ", err)
      alert("delete failed")
    }
  }

  const addProductToCart = async () => {
    const postOutput = await axios.post("/api/add-to-cart", { productId: _id });
    console.log(postOutput.data)
    return postOutput.data;
  }

  const handleAddToCart = async (e) => {
    e.preventDefault();

    try {
      const postOutput = await addProductToCart();
      if (cartItems.some(item => item._id === postOutput.item._id)) {
        setCartItems(cartItems.map(item => {
                if (item._id === postOutput.item._id) {
                  item.quantity += 1;
                }
      
                return item
              }))
      } else {
        setCartItems(cartItems.concat(postOutput.item));
      }
      setProduct(postOutput.product)
    } catch (err) {
      console.log("Update cart item failed", err);
      alert("Update cart item failed");
    }
  }

  return (
    <div className="product-details">
      <h3>{title}</h3>
      <p className="price">${price}</p>
      <p className="quantity">{quantity} left in stock</p>
      <div className="actions product-actions">
        <a href="/#" className={getAddToCartButtonClass()} onClick={handleAddToCart}>Add to Cart</a>
        <a href="/#" className="button edit" onClick={handleEditClick}>Edit</a>
      </div>
      <a href="/#" className="delete-button" onClick={handleDeleteClick}><span>X</span></a>
    </div>
  )
}

export default Product