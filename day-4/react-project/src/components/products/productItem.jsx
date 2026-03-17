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

function ProductItem({ name, price, inStock }) {
    return (
        <>
            <div className="productItem">

                {/* Displaying the Headings */}
                <h1 className="display"> Display </h1>

                {/* Displaying the Product */}
                <p> {`Name of the Product is: ${name}`} </p>

                {/* Displaying the Price */}
                <p> {`Price of the Product is: ${price}`} </p>
                
                {/* Checking whether it is in stock or not */}
                <p> {inStock ? "Yes, It is in Stock" : "No, It is not in stock"} </p>
            </div>
        </>
    )
}


export default ProductItem