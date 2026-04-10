// 🧠 2. REACT PORTAL
// ✅ What is this?

// 👉 A way to render component outside its parent DOM

// 🎯 Why we use it?
// Fix z-index issues
// Fix overflow hidden problems
// Used for:
// Modals
// Popups
// Tooltips


import { createPortal } from "react-dom";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div>
      <button onClick={onClose}>Close</button>
      {children}
    </div>,
    document.body
  );
}