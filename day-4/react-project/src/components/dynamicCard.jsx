// 1. Task: Dynamic Profile Card System
// What is the task about
// Building reusable components using props and expressions.
// What you have to do
// Create a ProfileCard component
// Pass props like:
// name
// age
// role
// profile image
// Use expressions to:
// Show "Adult" or "Minor" based on age
// Render multiple cards using the same component

function DynamicCard({name, age, role, profileImage})
{
    return(
        <>
        <div className="card">

            {/* Displaying the Heading */}
            <h1 className="profile"> PROFILE </h1>

            {/* Displaying the Image */}
            <img className="img" src={`${profileImage}`} alt="Candidate's Image" />
            
            {/* Displaying the name of the Candidate */}
            <p className="content"> {`Name: ${name}`} </p>

            {/* Displaying the Age of the Candidate */}
            <p className="content"> {`Age: ${age}`} </p>

            {/* Displaying the Role of the Candidate */}
            <p className="content"> {`Role: ${role}`} </p>

            {/* Checking condition and presenting whether the candidate is minor or Major */}
            <p className="content"> {age>=18 ? "Major" : "Minor"} </p>
        </div>
        </>
    )
}

export default DynamicCard