import { useState } from "react";
import Modal from "../React-portal/modal";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2>I am a Portal</h2>
      </Modal>
    </div>
  );
}