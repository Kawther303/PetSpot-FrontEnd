import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  let admin = false
  console.log(admin)
  if (user) {
    if (user.userType === 'Admin') {
      userOptions = (
        <nav>
          <h3>Welcome {user.name}!</h3>
          <Link to="/">Home</Link>
          <Link onClick={handleLogOut} to="/">
            Log Out
          </Link>
          <Link to="/editprofile/">Update</Link>
          <Link to="/changepassword">Change Password</Link>
          <Link to="/show">Profile Detail </Link>
          <Link to="/pets">Pets</Link>
          <Link to="/petItems">Items</Link>
          <Link to="/addPet">Add Pet</Link>
          <Link to="/addPetItem">Add Item</Link>
          <Link to="/userCart">My Cart</Link>
        </nav>
      )
    } else {
      userOptions = (
        <nav>
          <h3>Welcome {user.name}!</h3>
          <Link to="/">Home</Link>
          <Link onClick={handleLogOut} to="/">
            Log Out
          </Link>
          <Link to="/editprofile/">Update</Link>
          <Link to="/changepassword">Change Password</Link>
          <Link to="/show">Profile Detail </Link>
          <Link to="/pets">Pets</Link>
          <Link to="/petItems">Items</Link>
          <Link to="/userCart">My Cart</Link>
        </nav>
      )
    }
  }
  const publicOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/pets">Pets</Link>
      <Link to="/petItems">Items</Link>
    </nav>
  )

  return (
    <header>
      <Link to="/">
        <div className="logo-wrapper" alt="logo"></div>
      </Link>
      {user ? userOptions : publicOptions}
    </header>
  )
}

export default Nav
