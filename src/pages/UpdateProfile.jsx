import { useState, useEffect } from "react"
import { updateUser } from "../services/Auth"
import { useNavigate } from "react-router-dom"


const UpdateProfile = ({ user }) => {
  let navigate = useNavigate()
  const [userValue, setUserValue] = useState({
    name: user.name,
    profilePicture: user.profilePicture,
    address: user.address,
    telephone: user.telephone,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserValue({
      ...userValue,
      [name]: value,
    })
  }

  const handlePicChange = (e) => {
    setUserValue({
      ...userValue,
      profilePicture: e.target.files[0],
    })
    console.log(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("name", userValue.name)
    formData.append("profilePicture", userValue.profilePicture)
    formData.append("address", userValue.address)
    formData.append("telephone", userValue.telephone)

    try {
      let user_id = user.id
      const response = await updateUser(formData, user_id)
      setUserValue({
        name: userValue.name,
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
      <form
        className="col form-style"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <h1 className="form-heading">Update Profile</h1>
        <div className="col-md-10">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            value={userValue.name}
            className="form-control"
          />
        </div>
        <br />
        <div className="col-md-10">
          <label htmlFor="profilePicture">Profile Picture</label>
          <input
            onChange={handlePicChange}
            name="profilePicture"
            type="file"
            accept="image/*"
            className="form-control"
            
          />
        </div>
        <br />
        <div className="col-md-10">
          <label htmlFor="address">Address</label>
          <input
            onChange={handleChange}
            name="address"
            type="address"
            value={userValue.address}
            className="form-control"

          />
        </div>
        <br />
        <div className="col-md-10">
          <label htmlFor="telephone">Telephone</label>
          <input
            onChange={handleChange}
            name="telephone"
            type="telephone"
            value={userValue.telephone}
            className="form-control"
          />
          <br />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default UpdateProfile

