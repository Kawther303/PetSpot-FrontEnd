import { useState } from "react"
import { RegisterUser } from "../services/Auth"
import { useNavigate } from "react-router-dom"

const Register = () => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    userType: "",
    profilePicture: "",
    password: "",
    confirmPassword: "",
    address: "",
    telephone: "",
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      userType: formValues.userType,
      profilePicture: formValues.profilePicture,
      address: formValues.address,
      telephone: formValues.telephone,
    })
    setFormValues({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      userType: "",
      profilePicture: "",
      address: "",
      telephone: "",
    })
    navigate("/signin")
  }
  const handleFileChange = (e) => {
    e.preventDefault()
    setFormValues({ ...formValues, profilePicture: e.target.files[0] })
  }

  return (
    <div className="signin col main-background">
      <form
        className="col form-style"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <h1 className="form-heading">Create New Account</h1>
        <div className="col-md-10">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Your Name"
            value={formValues.name}
            required
            className="form-control"
          />
        </div>
        <br />
        <div className="col-md-10">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="example@example.com"
            value={formValues.email}
            required
            className="form-control"
          />
        </div>
        <br />
        <div className="col-md-10">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="******"
            value={formValues.password}
            required
            className="form-control"
          />
        </div>
        <br />
        <div className="col-md-10">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="confirmPassword"
            placeholder="******"
            value={formValues.confirmPassword}
            required
            className="form-control"
          />
        </div>
        <br />
        <div className="col-md-10">
          <label htmlFor="userType">User Type</label>
          <input
            onChange={handleChange}
            name="userType"
            type="userType"
            placeholder="admin"
            value={formValues.userType}
            required
            className="form-control"
          />
        </div>
        <br />
        <div className="col-md-10">
          <label htmlFor="profilePicture">Profile Picture</label>
          <input
            onChange={handleFileChange}
            name="profilePicture"
            type="file"
            accept="image/*"
            required
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
            placeholder="Address"
            value={formValues.address}
            required
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
            placeholder="telephone"
            value={formValues.telephone}
            required
            className="form-control"
          />
          <br />
        </div>
        <button
          disabled={
            !formValues.email ||
            (!formValues.password &&
              formValues.confirmPassword === formValues.password)
          }
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Register
