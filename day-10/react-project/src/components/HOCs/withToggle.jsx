import { useState } from "react";

// HOC: adds toggle functionality
function withToggle(Component) {
    return function WithToggle(props) {
        const [isVisible, setIsVisible] = useState(true);

        return (
            <div>
                <button onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? "Hide" : "Show"}
                </button>

                {isVisible && <Component {...props} />}
            </div>
        );
    };
}

// Simple component
function ContentBox({ title, content }) {
    return (
        <div>
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    );
}

// Enhanced component
const ToggleableContent = withToggle(ContentBox);

// Main Example
function Example_withToggle() {
    return (
        <div>
            <hr />
            <h3>withToggle Example</h3>

            <ToggleableContent
                title="React Best Practices"
                content="Keep components small, use keys, use hooks properly."
            />

            <ToggleableContent
                title="JavaScript Tips"
                content="Use const/let, learn async/await, understand closures."
            />
        </div>
    );
}

export default Example_withToggle