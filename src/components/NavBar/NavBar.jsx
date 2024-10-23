import { Link } from "react-router-dom"

const NavBar = ({ user, handleSignOut }) => {

  // ! Event Handlers
  

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          { user ?
            <>
              <li><Link to="" onClick={handleSignOut}>Sign Out</Link></li>
            </>
            :
            <>
              <li><Link to="/signin">Sign In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </>
          }
        </ul>
      </nav>
    </>
  )
}
export default NavBar
