import { useState } from "react"
import { SignInUser } from "../services/Auth"
import { useNavigate } from "react-router-dom"

const SignIn = ({ setUser }) => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({ email: "", password: "" })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ email: "", password: "" })
    setUser(payload)
    navigate("/")
  }

  return (
  //   <div className="signin col main-background" >
  //     <form className="col form-style" onSubmit={handleSubmit}>
  //     <h1 className="form-heading">Sign In</h1>
  //       <div className="col-md-10">
  //         <label htmlFor="email">Email</label>
  //         <input
  //           onChange={handleChange}
  //           name="email"
  //           type="email"
  //           placeholder="example@example.com"
  //           value={formValues.email}
  //           required
  //           className="form-control"

  //         />
  //       </div>
  //       <br />
  //       <div className="col-md-10">
  //         <label htmlFor="password">Password</label>
  //         <input
  //           onChange={handleChange}
  //           type="password"
  //           name="password"
  //           value={formValues.password}
  //           required
  //           className="form-control"

  //         />
  //       </div>
  //       <br />
  //       <button disabled={!formValues.email || !formValues.password}>
  //         Sign In
  //       </button>
  //     </form>
  //   </div>
  // )
<div className="signin col main-background" >
      <form className="col form-style" onSubmit={handleSubmit}>
      <h1 className="form-heading">Sign In</h1>
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
            value={formValues.password}
            required
            className="form-control"

          />
        </div>
        <br />
        <button disabled={!formValues.email || !formValues.password}>
          Sign In
        </button>
      </form>
    </div>
  )
}

export default SignIn
