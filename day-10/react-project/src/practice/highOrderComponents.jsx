import { useState } from "react";

function withCounter(WrappedComponent) {
    return function EnhancedComponent(props) {
        const [count, setCount] = useState(0);

        const increment = () => {
            setCount(count + 1);
        }

    return (
            <WrappedComponent
                count={count}
                increment={increment}
                {...props}

            />
    )

}
}

export default withCounter;