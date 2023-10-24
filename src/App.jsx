import { useState, useEffect } from "react"
import { Route, Routes } from "react-router"
import Nav from "./components/Nav"
import Register from "./pages/Register"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import "./App.css"
import { CheckSession } from "./services/Auth"
import UpdateProfile from "./pages/UpdateProfile"
import ChangePassword from "./pages/ChangePassword"
import Show from "./pages/show"
const App = () => {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }
  const checkToken = async () => {
    const user = await CheckSession()
    console.log(user)
    setUser(user)
  }
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Nav user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/editprofile/" element={<UpdateProfile user={user} />} />
          <Route path="/show" element={<Show user={user} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
