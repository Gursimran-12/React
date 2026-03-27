import { useState } from "react";


// Basic Card component using children
function Card({ children, title }) {
  return (
    <div>
      {title && <h3>{title}</h3>}
      <div>
        {children}
      </div>
    </div>
  );
}

// Button component using children
function Button({ children, onClick }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

// Container component using children
function Container({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

function Example1_ChildrenProp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Pattern 1: Children Prop</h3>

      <Container>
        <Card title="Counter Example">
          <p>The content inside this card is passed as 'children' prop!</p>

          <div>
            <div>{count}</div>
          </div>

          <div>
            <Button onClick={() => setCount(count + 1)}>
              Increment
            </Button>
            <Button onClick={() => setCount(count - 1)}>
              Decrement
            </Button>
            <Button onClick={() => setCount(0)}>
              Reset
            </Button>
          </div>
        </Card>

        <Card title="User Profile">
          <div>
            <div>👤</div>
            <h4>Inder Singh</h4>
            <p>Senior Full Stack Developer</p>
            <p>NetSquare Softwares</p>
          </div>
        </Card>
      </Container>

    </div>
  );
}
export default Example1_ChildrenProp
