import {useState} from 'react';
import axios from 'axios';


const AddProduct = ({ items, setItems }) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [formVisible, setFormVisible] = useState(false);

    const clearFormFields = () => {
        setTitle("")
        setPrice("")
        setQuantity("")
    }

    const formVisibleValue = (isVisible) => {
        if (!isVisible) {
            return "add-form"
        }
        return "add-form visible"
    }

    const handleTitleEdit = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    }

    const handlePriceEdit = (e) => {
        e.preventDefault();
        setPrice(e.target.value);
    }

    const handleQuantityEdit = (e) => {
        e.preventDefault();
        setQuantity(e.target.value);
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        setFormVisible(false)
        clearFormFields()
    }
    const handleAddProductButton = (e) => {
        e.preventDefault();
        console.log('handleAddProductButton activated')
        setFormVisible(true)
    }

    const postProduct = async (title, price, quantity) => {
        const postedProduct = await axios.post("/api/products/", {title: title, price: price, quantity})
        return postedProduct
    }

    const handleAddProduct = async (e) => {
        try {
            const newProduct = await postProduct(title, price, quantity)
            setFormVisible(false)
            clearFormFields()
            setItems(items.concat(newProduct.data))
        } catch (err) {
            console.log("error with handleAddProduct", err)
            alert("failed to add product")
        }
    }

    return (
        <div className={formVisibleValue(formVisible)}>
            <p><a className="button add-product-button" onClick={handleAddProductButton}>Add A Product</a></p>
            <h3>Add Product</h3>
            <form>
                <div className="input-group">
                    <label htmlFor="product-name">Product Name</label>
                    <input type="text" id="product-name" value={title} onChange={handleTitleEdit}/>
                </div>

                <div className="input-group">
                    <label htmlFor="product-price">Price</label>
                    <input type="text" id="product-price" value={price} onChange={handlePriceEdit} />
                </div>

                <div className="input-group">
                    <label htmlFor="product-quantity">Quantity</label>
                    <input type="text" id="product-quantity" value={quantity} onChange={handleQuantityEdit} />
                </div>

                <div className="actions form-actions">
                    <a className="button" onClick={handleAddProduct}>Add</a>
                    <a className="button" onClick={handleCancelClick}>Cancel</a>
                </div>
            </form>
        </div>
    )
}

export default AddProduct;