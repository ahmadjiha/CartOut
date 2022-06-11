import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import EditableProduct from "./EditableProduct";
import { productsReceived } from "../actions/productsActions";


const Products = ({ cartItems, setCartItems }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get('http://localhost:5001/api/products');
      dispatch(productsReceived(data));
    }

    getProducts();
  }, [dispatch]);

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map(product => (<EditableProduct 
        cartItems={cartItems}
        setCartItems={setCartItems}
        key={product._id} 
        product={product}
      />))}
    </div>
  )
}

export default Products;