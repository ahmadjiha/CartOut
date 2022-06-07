import EditableProduct from "./EditableProduct"

const Products = ({ products }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map(product => (<EditableProduct key={product._id} product={product} />))}
    </div>
  )
}

export default Products;