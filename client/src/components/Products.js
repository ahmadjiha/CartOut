import EditableProduct from "./EditableProduct"

const Products = ({ products, deleteFromItems, cartItems, setCartItems }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map(product => (<EditableProduct 
        cartItems={cartItems}
        setCartItems={setCartItems}
        key={product._id} 
        product={product}
        deleteFromItems={deleteFromItems} />))}
    </div>
  )
}

export default Products;