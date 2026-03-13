import img from '../assets/profile.jpg'

function ProfileCard()
{
    const name = "Gursimran Kaur";
    const role = "MERN Stack Intern";
    const company = "NetSquare Softwares"; 

    return(
        <>
        <div className="card">

            {/* heading of the card */}
            <h1 className='profile'> PROFILE </h1>

            {/* Image used in the Card */}
            <img src= {img} alt="Candidate's Image here" className='img'/>

            {/* fetching the name defined above */}
            <p className='content'> Name: {name} </p>

            {/* fetching the role defined above */}
            <p className='content'> Role: {role} </p>

            {/* fetching the company defined above */}
            <p className='content'> Company: {company} </p>

        </div>
        </>
    )
}

export default ProfileCard