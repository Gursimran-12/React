// import { useState } from "react";

// export default function ZustandDemo() {
//   const [cart, setCart] = useState([]);

//   const addToCart = () => {
//     setCart([...cart, "Product"]);
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <div>
//       <h2>Zustand Style (Simple State)</h2>

//       <p>Items in Cart: {cart.length}</p>

//       <button onClick={addToCart}>Add Product</button>
//       <button onClick={clearCart}>Clear Cart</button>
//     </div>
//   );
// }


import { create } from "zustand";


const useCartStore = create((set) => ({
  cart: [],

  addToCart: () =>
    set((state) => ({
      cart: [...state.cart, "Product"],
    })),

  clearCart: () => set({ cart: [] }),
}));


export default function ZustandDemo() {
  const { cart, addToCart, clearCart } = useCartStore();

  return (
    <div>
      <h2>Zustand Example</h2>

      <p>Items in Cart: {cart.length}</p>

      <button onClick={addToCart}>Add Product</button>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}