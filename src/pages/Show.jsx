import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { showUser } from "../services/Auth"
import axios from "axios"

const Show = ({ user }) => {
  let navigate = useNavigate()
  const [newUser, setUserValue] = useState(null)
  // {
  // name: user.name,
  // email: user.email,
  // profilePicture: user.profilePicture,
  // address: user.address,
  // telephone: user.telephone,
  // })
  const imagePath = `http://localhost:3001/`
  useEffect(() => {
    const getDetails = async () => {
      const response = await axios.get(
        `http://localhost:3001/auth/show/${user.id}`
      )
      setUserValue(response.data)
      console.log(user)
    }
    getDetails()
  }, [])

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setUserValue({
  //     ...userValue,
  //     [name]: value,
  //   })
  // }

  // const handlePicChange = (e) => {
  //   setUserValue({
  //     ...userValue,
  //     profilePicture: e.target.files[0],
  //   })
  //   console.log(e.target.files[0])
  // }

  //   const handleSubmit = async (e) => {
  //     e.preventDefault()
  //     const formData = new FormData()
  //     formData.append("name", userValue.name)
  //     formData.append("profilePicture", userValue.profilePicture)
  //     formData.append("address", userValue.address)
  //     formData.append("telephone", userValue.telephone)
  //   try {
  //     let user_id = user.id
  //     const response = await showUser(userValue, user_id)
  //     (formData)
  //     setUserValue({
  //       name: userValue.name,
  //       email: userValue.email,
  //       profilePicture: req.files.path,
  //       address: userValue.address,
  //       telephone: userValue.telephone,
  //     })

  //     navigate("/signin")
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  return newUser ? (
    <div className="signin col main-background">
      <form className="col form-style" encType="multipart/form-data">
        <h1 className="form-heading">Profile Detail</h1>
        <br />
        <div>
          {/* <img src="user.profilePicture.replace(/public/, '')" alt="" /> */}
         <img src={`${imagePath}${newUser.profilePicture.replace('public/', '')}`} />
        </div>
        <div className="col-md-10">
          <label htmlFor="name">Name</label>
          <input name="name" value={newUser.name} className="form-control" />
        </div>
        <br />
        <div className="col-md-10">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={newUser.email}
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
            value={newUser.address}
            className="form-control"
          />
        </div>
        <br />
        <div className="col-md-10">
          <label htmlFor="telephone">Telephone</label>
          <input
            name="telephone"
            type="telephone"
            value={newUser.telephone}
            className="form-control"
          />
          <br />
        </div>
      </form>
    </div>
  ) : null
}

export default Show

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// const Userprofile = ({ user }) => {
//   const navigate = useNavigate()
//   const [newUserData, setNewUserData] = useState({ ...user })
//   const [isEditing, setIsEditing] = useState(false)
//   const [selectedImage, setSelectedImage] = useState(null)
//   const [userData, setUserData] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setNewUserData({
//       ...newUserData,
//       [name]: value
//     })
//   }

//   const handleImageChange = (e) => {
//     const imageFile = e.target.files[0]
//     setSelectedImage(imageFile)
//   }

//   const handleUpdatePassword = () => {
//     navigate('/passwordchange')
//   }

//   const hello = async () => {
//     try {
//       setLoading(true)
//       setError(null)
//       const response = await axios.get(
//         `http://localhost:4000/userinfo/${user.id}`
//       )
//       setUserData(response.data)
//     } catch (error) {
//       setError(error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     hello()
//   }, [])

//   const handleUpdateProfile = async (e) => {
//     e.preventDefault()
//     try {
//       setLoading(true)
//       setError(null)

//       const formData = new FormData()
//       formData.append('firstName', newUserData.firstName)
//       formData.append('lastName', newUserData.lastName)
//       formData.append('email', newUserData.email)

//       if (selectedImage) {
//         formData.append('image', selectedImage)
//       }

//       const response = await axios.post(
//         `http://localhost:4000/updateprofile/${user.id}`,
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         }
//       )

//       hello()
//       setIsEditing(false)
//     } catch (error) {
//       setError(error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>Error: {error.message}</p>
//       ) : isEditing ? (
//         <div>
//           <label htmlFor="firstName">First Name:</label>
//           <input
//             type="text"
//             name="firstName"
//             value={newUserData.firstName}
//             onChange={handleInputChange}
//           />
//           <label htmlFor="lastName">Last Name:</label>
//           <input
//             type="text"
//             name="lastName"
//             value={newUserData.lastName}
//             onChange={handleInputChange}
//           />
//           <label htmlFor="email">Email:</label>
//           <input
//             type="text"
//             name="email"
//             value={newUserData.email}
//             onChange={handleInputChange}
//           />
//           <label htmlFor="image">Profile Image:</label>
//           <input
//             type="file"
//             name="image"
//             accept="image/*"
//             onChange={handleImageChange}
//           />
//           <button onClick={handleUpdateProfile}>Save</button>
//         </div>
//       ) : (
//         <div>
//           {userData ? (
//             <>
//               <img
//                 src={`http://localhost:4000/images/${userData.image}`}
//                 height={150}
//                 width={100}
//                 alt=""
//               />
//               <h2>Email: {userData.email}</h2>
//               <h2>Name: {userData.firstName}</h2>
//               <button onClick={() => setIsEditing(true)}>Edit Profile</button>
//               <button onClick={handleUpdatePassword}>Change Password</button>
//             </>
//           ) : (
//             <h1>Null</h1>
//           )}
//         </div>
//       )}
//     </div>
//   )
// }

// export default Userprofile
