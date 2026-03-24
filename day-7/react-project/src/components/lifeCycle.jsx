// function LifecyclePractice({ productId }) {
//   // TODO:
//   // 1. On MOUNT: console.log "Component mounted"
//   // 2. On MOUNT: fetch product data
//   // 3. On MOUNT: start a timer
//   // 4. On UPDATE (productId change): fetch new product data
//   // 5. On UPDATE (productId change): log "Product ID changed to: X"
//   // 6. On UNMOUNT: clear the timer
//   // 7. On UNMOUNT: log "Component unmounted"
  
//   return <div>Product Details</div>;
// }

import { useEffect, useState } from "react";

function LifecyclePractice({ productId }) {

    const [data, setData] = useState([]);
    const [time, setTime] = useState(0);

    console.log("Component Function Running");

    useEffect(() => {

        console.log("Component Mounted!!");

        // Fetch ALL products on mount
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setData(data.products)) 
            .catch(err => console.error(err));

        // Start timer
        const timer = setInterval(() => {
            setTime(c => c + 1);
        }, 1000);

        // Cleanup on unmount
        return () => {
            clearInterval(timer);
            console.log("Component Unmounted!!");
        };

    }, []);


    useEffect(() => {

        if (!productId) return; 

        console.log("Product Id changed to:", productId);

      
        fetch(`https://dummyjson.com/products/${productId}`)
            .then(res => res.json())
            .then(product => setData([product]))
            .catch(err => console.error(err));

    }, [productId]);

    return (
        <>
            <h1>Product Details</h1>
            <h2>{`Timer is here: ${time}`}</h2>

            {data.length === 0 ? (
                <p>Loading...</p>
            ) : (
                data.map((product) => (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <p>ID: {product.id}</p>
                        <p>Price: ${product.price}</p>
                        <p>Category:{product.category}</p>
                        <hr />
                    </div>
                ))
            )}
        </>
    );
}

export default LifecyclePractice;