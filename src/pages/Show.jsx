import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { showUser } from "../services/Auth"

const Show = ({ user }) => {
  let navigate = useNavigate()
  const [userValue, setUserValue] = useState({
    name: user.name,
    email: user.email,
    profilePicture: user.profilePicture,
    address: user.address,
    telephone: user.telephone,
  })


  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("name", userValue.name)
    formData.append("profilePicture", userValue.profilePicture)
    formData.append("address", userValue.address)
    formData.append("telephone", userValue.telephone)
  try {
    let user_id = user.id
    const response = await showUser(userValue, user_id)
    (formData)
    setUserValue({
      name: userValue.name,
      email: userValue.email,
      profilePicture: req.files.path,
      address: userValue.address,
      telephone: userValue.telephone,
    })
    
    navigate("/signin")
  } catch (error) {
    console.log(error)
  }
}
  return (
    <div className="signin col main-background">
      <form className="col form-style" encType="multipart/form-data">
        <h1 className="form-heading">Profile Detail</h1>        
        <br />
        <div>
          <img src="user.profilePicture.replace(/public/, '')" alt="" />
        </div>
        <div className="col-md-10">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            value={user.name}
            className="form-control"
          />
        </div>
        <br />
        <div className="col-md-10">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={user.email}
            required
            className="form-control"
          />
        </div>

        <br />
        <div className="col-md-10">
          <label htmlFor="address">Address</label>
          <input
            name="address"
            type="address"
            value={user.address}
            className="form-control"
          />
        </div>
        <br />
        <div className="col-md-10">
          <label htmlFor="telephone">Telephone</label>
          <input
            
            name="telephone"
            type="telephone"
            value={user.telephone}
            className="form-control"
          />
          <br />
        </div>
      </form>
    </div>
  )
}

export default Show



