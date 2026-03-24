import { useState, useRef } from "react"

function InputValues()
{
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value; 

        console.log("Name: ", name);
        console.log("Email: ", email);

        setSubmittedData({name, email});

        // Clear the input
        nameRef.current.value = " ";
        emailRef.current.value = " ";
    };

    return (
        <>
        <h2> Task 2: Accessing Input Values </h2>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={nameRef} placeholder="Name" />
            <input type="email" ref={emailRef} placeholder="email" />

            <button type="submit"> Submit </button>
        </form>

        {submittedData && (
            <div>
                <p> Submitted Data is shown here: </p>
                <p> Name: {submittedData.name} </p>
                <p> Email: {submittedData.email} </p>
            </div>
        )}
        </>
    )
}

export default InputValues