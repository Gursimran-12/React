// 2. Task: Component-Based Product List
// What is the task about
// Breaking UI into multiple components and using import/export correctly.
// 🛠 What you have to do
// Create components:
// ProductList
// ProductItem
// Store product data in an array
// Pass data using props
// Display:
// Product name
// Price
// Availability (In stock / Out of stock using expression)

import ProductItem from "./productItem";

function ProductList() {
    const products = [
        { id: 1, name: "Laptop", price: "50000", inStock: true },
        { id: 2, name: "Mobile", price: "30000", inStock: false },
        { id: 3, name: "Ear-phones", price: "10000", inStock: true }
    ]

    return(
        <div>
        <h1> Product List </h1>

        <p> {products.map((product) => (
            <ProductItem
            key={product.id}
            name={product.name}
            price={product.price}
            inStock={product.inStock}
            />
        ))} </p>
       </div>
    )
}

export default ProductList;