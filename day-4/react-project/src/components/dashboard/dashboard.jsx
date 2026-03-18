// Task: Conditional Rendering Dashboard
// Create a Dashboard Component
// Pass a prop: isLoggedIn
// Show:
// "Welcome User" if true
// "Please Login" if false
// Add:
// User name display using props

function Dashboard({isLoggedIn, name})
{
    return(
        <>
        <h1> {`Username here: ${name}`} </h1>
        <p> {"Here is your Login Status"} </p>
        <p> {isLoggedIn ? "Welcome User" : "Please Login"} </p>
        </>
    )
}

export default Dashboard