import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <h3>Welcome {user.email}!</h3>
        <Link onClick={handleLogOut} to=" ">
          Log Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/Update profile">Update</Link>
      <Link to="/pets">Pets</Link>
      <Link to="/petItems">Items</Link>
      <Link to="/addPet">Add Pet</Link>
      <Link to="/addPetItem">Add Item</Link>
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
