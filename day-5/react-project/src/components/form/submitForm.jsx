// import { useState } from "react"

// function SubmitForm() {

// // Setting useState() for name
// const [name, setName] = useState("")
// const [submittedName, setSubmittedName] = useState("")

// // Setting useState() for role
// const [role, setRole] = useState("")
// const [submittedRole, setSubmittedRole] = useState("")

// // for getting the value of name
// function nameSetter(e) {
// setName(e.target.value);
// }

// // for getting the value of role
// function roleSetter(e) {
// setRole(e.target.value);
// }

// // function to handle the submit
// function handleSubmit() {
// setSubmittedName(name);
// setSubmittedRole(role);  
// setName(""); 
// setRole("")
// }

// return (
// <>

// // input for getting name
// <input type="text" placeholder="Write your name here" value={name} onChange={nameSetter} />

// // input for getting role
// <input type="text" placeholder="Write your role here" value={role} onChange={roleSetter} />

// // button for the submission
// <button onClick={handleSubmit}> Submit </button>

// // This area is for the display purpose 
// <h2>{submittedName && `Name:  ${submittedName}`}</h2>
// <h2>{submittedRole && `Role:  ${submittedRole}`}</h2>
// </>
// )
// }

// export default SubmitForm

// for Multiple Enteries

import { useState } from "react"

function SubmitForm() {
    const [name, setName] = useState("")
    const [role, setRole] = useState("")
    const [entries, setEntries] = useState([])


// Function to handle Submit, when the user click submit, then these users will be 
// stored in the form of array
    function handleSubmit() {
        if (name.trim() === "" || role.trim() === "") return;

        const newEntry = {
            name: name,
            role: role
        }

        // destructing Array, because in react it is very important as React only updates UI 
        // when state references are changed

        setEntries([...entries, newEntry])

        setName("")
        setRole("")
    }

    return (
        <>
            <div className="submitForm">
                <h1> SUBMIT FORM </h1>

                {/* for getting the user's name */}
                <input type="text" placeholder="Write your name here"
                    value={name} onChange={(e) => setName(e.target.value)} />

                {/* for getting the user's role */}
                <input type="text" placeholder="Write your role here"
                    value={role} onChange={(e) => setRole(e.target.value)} />

                {/* for the submission */}
                <button className="btn" onClick={handleSubmit}>Submit</button>

                {/* Here, map is used and it will traverse and display all the Enteries
                present in the array */}

                {entries.map((item, index) => (
                    <div key={index}>
                        <h2>Name: {item.name}</h2>
                        <h2>Role: {item.role}</h2>
                        <hr />
                    </div>
                ))}
            </div>
        </>
    )
}

export default SubmitForm