function Demo({ count, increment }) {
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Click Me</button>
    </div>
  );
}

export default Demo;
