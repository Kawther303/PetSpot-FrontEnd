import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import Nav from './components/Nav'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import PetsList from './pages/PetList'
import PetItemList from './pages/PetItemList'
import AddPet from './pages/AddPet'
import AddPetItem from './pages/AddPetItem'
import PetItemDetails from './pages/PetItemDetailsjsx'

import { CheckSession } from './services/Auth'
const App = () => {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
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
          <Route path="/pets" element={<PetsList />} />
          <Route path="/petItems" element={<PetItemList />} />
          <Route path="/addPet" element={<AddPet />} />
          <Route path="/addPetItem" element={<AddPetItem />} />
          <Route path="/petItems/:id" element={<PetItemDetails petItem={petItem} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
