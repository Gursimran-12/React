// In navbar, Create a heading component from scratch using functional components with JSX
// add a logo on the left
// Add a search bar in the middle
// Add a user icon on right

import logoImg from '../assets/logo.jpg'
function Navbar() {
    return (
        <>
            <div className='nav'>
                
                {/* Logo Image */}
                <img className='logo' src={logoImg} />

                {/* Search bar */}
                <input type='text' placeholder='Search here' />

                {/* User icon */}
                <a href="#"> <i id="icon" class="fa-solid fa-user"></i> </a>
            </div>

        </>
        )
}

export default Navbar