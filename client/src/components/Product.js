import axios from "axios";
import { deleteProductFromStore, decrementStock } from "../actions/productsActions";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

const Product = ({
  product: {title, price, quantity, _id},
  setEditFormVisible,
  deleteFromItems,
  cartItems,
  setCartItems,
  setProduct }) => {

  const dispatch = useDispatch();

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
    return deleteOutput;
  }

  const handleDeleteClick = async (e) => {
    e.preventDefault()
    try {
      await deleteProduct()
      dispatch(deleteProductFromStore(_id))
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
      dispatch(addToCart(postOutput.item, postOutput.product._id));
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
        <a className={getAddToCartButtonClass()} onClick={handleAddToCart}>Add to Cart</a>
        <a href="/#" className="button edit" onClick={handleEditClick}>Edit</a>
      </div>
      <a className="delete-button" onClick={handleDeleteClick}><span>X</span></a>
    </div>
  )
}

export default Product