import EditableProduct from "./EditableProduct"
import { useSelector, useDispatch } from "react-redux"
const Products = ({ cartItems, setCartItems }) => {
  const products = useSelector(state => state.products);
  console.log(products);

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map(product => (<EditableProduct 
        cartItems={cartItems}
        setCartItems={setCartItems}
        key={product._id} 
        product={product}
        // deleteFromItems={deleteFromItems} 
      />))}
    </div>
  )
}

export default Products;