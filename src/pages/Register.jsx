import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    profilePicture: null,
    userType: 'Client',
    password: '',
    confirmPassword: '',
    address: '',
    telephone: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  const handlePicChange = (e) => {
    setFormValues({
      ...formValues,
      profilePicture: e.target.files[0]
    })
    console.log(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', formValues.name)
    formData.append('email', formValues.email)
    formData.append('password', formValues.password)
    formData.append('userType', formValues.userType)
    formData.append('profilePicture', formValues.profilePicture)
    formData.append('address', formValues.address)
    formData.append('telephone', formValues.telephone)

    try {
      const response = await RegisterUser(formData)
      setFormValues({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        profilePicture: '',
        userType: 'Client',
        address: '',
        telephone: ''
      })
      navigate('/signin')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="signin col home-container">
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
          <label htmlFor="profilePicture">Profile Picture</label>
          <input
            onChange={handlePicChange}
            name="profilePicture"
            type="file"
            accept="image/*"
            required
            className="form-control"
          />
        </div>
        <br />
        <div className="col-md-10">
          <label htmlFor="userType">User Type</label>
          <input
            onChange={handleChange}
            type="userType"
            name="userType"
            value="Client"
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
// import { useState } from "react"
// import { RegisterUser } from "../services/Auth"
// import { useNavigate } from "react-router-dom"

// const Register = () => {
//   let navigate = useNavigate()
//   const [formValues, setFormValues] = useState({
//     name: "",
//     email: "",
//     profilePicture: null,
//     userType:"Client",
//     password: "",
//     confirmPassword: "",
//     address: "",
//     telephone: "",
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormValues({
//       ...formValues,
//       [name]: value,
//     })
//   }
//   const handlePicChange = (e) => {
//     setFormValues({
//       ...formValues,
//       profilePicture: e.target.files[0],
//     })
//     console.log(e.target.files[0])
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const formData = new FormData()
//     formData.append("name", formValues.name)
//     formData.append("email", formValues.email)
//     formData.append("password", formValues.password)
//     formData.append("userType", formValues.userType)
//     formData.append("profilePicture", formValues.profilePicture)
//     formData.append("address", formValues.address)
//     formData.append("telephone", formValues.telephone)

//     try {
//       const response = await RegisterUser(formData)
//       setFormValues({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//         profilePicture: "",
//         userType:"Client",
//         address: "",
//         telephone: "",
//       })
//       navigate("/signin")
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   return (
//     <div className="signin col main-background">
//       <form
//         className="col form-style"
//         onSubmit={handleSubmit}
//         encType="multipart/form-data"
//       >
//         <h1 className="form-heading">Create New Account</h1>
//         <div className="col-md-10">
//           <label htmlFor="name">Name</label>
//           <input
//             onChange={handleChange}
//             name="name"
//             type="text"
//             placeholder="Your Name"
//             value={formValues.name}
//             required
//             className="form-control"
//           />
//         </div>
//         <br />
//         <div className="col-md-10">
//           <label htmlFor="email">Email</label>
//           <input
//             onChange={handleChange}
//             name="email"
//             type="email"
//             placeholder="example@example.com"
//             value={formValues.email}
//             required
//             className="form-control"
//           />
//         </div>
//         <br />
//         <div className="col-md-10">
//           <label htmlFor="password">Password</label>
//           <input
//             onChange={handleChange}
//             type="password"
//             name="password"
//             placeholder="******"
//             value={formValues.password}
//             required
//             className="form-control"
//           />
//         </div>
//         <br />
//         <div className="col-md-10">
//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <input
//             onChange={handleChange}
//             type="password"
//             name="confirmPassword"
//             placeholder="******"
//             value={formValues.confirmPassword}
//             required
//             className="form-control"
//           />
//         </div>
//         <br />
//         <div className="col-md-10">
//           <label htmlFor="profilePicture">Profile Picture</label>
//           <input
//             onChange={handlePicChange}
//             name="profilePicture"
//             type="file"
//             accept="image/*"
//             required
//             className="form-control"
//           />
//         </div>
//         <br />
//         <div className="col-md-10">
//           <label htmlFor="userType">User Type</label>
//           <input
//             onChange={handleChange}
//             type="userType"
//             name="userType"
//             value="Client"
//             required
//             className="form-control"
//           />
//         </div>
//         <br />
//         <div className="col-md-10">
//           <label htmlFor="address">Address</label>
//           <input
//             onChange={handleChange}
//             name="address"
//             type="address"
//             placeholder="Address"
//             value={formValues.address}
//             required
//             className="form-control"
//           />
//         </div>
//         <br />
//         <div className="col-md-10">
//           <label htmlFor="telephone">Telephone</label>
//           <input
//             onChange={handleChange}
//             name="telephone"
//             type="telephone"
//             placeholder="telephone"
//             value={formValues.telephone}
//             required
//             className="form-control"
//           />
//           <br />
//         </div>
//         <button
//           disabled={
//             !formValues.email ||
//             (!formValues.password &&
//               formValues.confirmPassword === formValues.password)
//           }
//         >
//           Sign Up
//         </button>
//       </form>
//     </div>
//   )
// }

// export default Register
