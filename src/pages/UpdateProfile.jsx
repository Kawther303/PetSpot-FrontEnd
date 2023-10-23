import axios from "axios"
import { useState, useEffect } from "react"
import { updateUser } from "../services/Auth"
import { useNavigate } from "react-router-dom"

// const UpdateProfile = ({ user }) => {
// const [value, setValue] = useState({
//   name: "",
//   email: "",
//   profilePicture: null,
//   address: "",
//   telephone: "",
// })

// const handleChange = (e) => {
//   const { name, value } = e.target
//   setValue({
//     ...value,
//     [name]: value,
//   })
// }

// const handlePicChange = (e) => {
//   setValue({
//     ...value,
//     profilePicture: e.target.files[0],
//   })
//   console.log(e.target.files[0])
// }

// const handleSubmit = async (e) => {
//   e.preventDefault()
//   const formData = new FormData()
//   formData.append("name", value.name)
//   formData.append("email", value.email)
//   formData.append("profilePicture", value.profilePicture)
//   formData.append("address", value.address)
//   formData.append("telephone", value.telephone)

//   try {
//     let user_id = user.id
//     const response = await updateUser(value, user_id)
//     (formData)
//     setValue({
//       name: value.name,
//       email: value.email,
//       profilePicture: value.profilePicture,
//       address: value.address,
//       telephone: value.telephone,
//     })
//     console.log(value)
//     navigate("/signin")
//   } catch (error) {
//     console.log(error)
//   }
// }

const UpdateProfile = ({ user }) => {
  let navigate = useNavigate()
  const [userValue, setUserValue] = useState({
    name: user.name,
    profilePicture: user.profilePicture,
    address: user.address,
    telephone: user.telephone,
  })
  //   useEffect(() => {
  //     // Runs ONCE after initial rendering
  //     // and after every rendering ONLY IF `prop` or `state` changes
  //   }, [user, value]);
  // }
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
      const response = await updateUser(userValue, user_id)(formData)
      setUserValue({
        name: userValue.name,
        // email: userValue.email,
        profilePicture: req.files.path,
        address: userValue.address,
        telephone: userValue.telephone,
      })
      
      navigate("/signin")
    } catch (error) {
      console.log(error)
    }
  }

  // updateUser(value, user_id)

  //   .then(res => console.log(res))
  //   .catch(res => console.log(err))

  // const checkToken = async () => {
  //   const user = await CheckSession()
  //   setUser(user)
  // }
  // useEffect(() => {
  //   const token = localStorage.getItem("token")
  //   if (token) {
  //     checkToken()
  //   }
  // }, [])

  // const [userValues, setUserValues] = useState({
  //   name: "",
  //   email: "",
  //   profilePicture: null,
  //   address: "",
  //   telephone: "",
  // });

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const payload = await UpdateProfile(userValues)
  //   setUserValues({
  //   name: "",
  //   email: "",
  //   profilePicture: null,
  //   address: "",
  //   telephone: "", })
  //   setUser(payload)
  //   navigate("/")
  // }
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setValue((prevUserValues) => ({
  //     ...prevUserValues,
  //     [name]: value,
  //   }));
  // };

  // const handlePicChange = (e) => {
  //   setValue((prevUserValues) => ({
  //     ...prevUserValues,
  //     profilePicture: e.target.files[0],
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("name", value.name);
  //   formData.append("email", value.email);
  //   formData.append("profilePicture", value.profilePicture);
  //   formData.append("address", value.address);
  //   formData.append("telephone", value.telephone);
  // }
  //   try {
  //     const response = await updateUser(formData);

  //     // Handle the response as needed
  //     if (response.ok) {
  //       console.log('Profile updated successfully');
  //       navigate('/showprofile')
  //     } else {
  //       console.error('Failed to update profile');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };
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
            // placeholder={user.name}
            value={userValue.name}
            // required
            className="form-control"
          />
        </div>
        {/* <br /> */}
        {/* <div className="col-md-10">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder={user.email}
            value={userValue.email}
            required
            className="form-control"
          />
        </div> */}
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
            // placeholder={user.address}
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
            // placeholder={user.telephone}
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

// const ProfileForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch('/api/updateProfile', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email }),
//       });

//       // Handle the response as needed
//       if (response.ok) {
//         console.log('Profile updated successfully');
//       } else {
//         console.error('Failed to update profile');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={handleNameChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={handleEmailChange}
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default ProfileForm;
