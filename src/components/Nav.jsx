import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <h3>Welcome {user.name}!</h3>
        <Link to="/">Post</Link>
        <Link onClick={handleLogOut} to="/">Log Out
        </Link>      
        <Link to='/editprofile/'>Update</Link>
        <Link to= '/changepassword'>Change Password</Link>
        <Link to= '/show'>Profile Detail </Link>
      </nav>
    )
  }
  const publicOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>

    </nav>
  )

  return (
    <header>
      <Link to="/">
        <div className="logo-wrapper" alt="logo">
        </div>
      </Link>
      {user ? userOptions : publicOptions}
    </header>
  )
}

export default Nav
