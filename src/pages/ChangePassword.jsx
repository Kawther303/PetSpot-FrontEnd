import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { UpdatePassword } from "../services/Auth"

const ChangePassword = ({ user }) => {
  let navigate = useNavigate()
  // console.log("user info= ", user)
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")
  const [error, setError] = useState("")

  console.log("Current password =", currentPassword)
  console.log("new password =", newPassword)

  const handleUpdatePassword = async (e) => {
    e.preventDefault()
    if (newPassword !== confirmNewPassword) {
      setError("password must match.")
      return
    } else {
      const response = await UpdatePassword(
        currentPassword,
        newPassword,
        user.id
      ).then((response) => {
        console.log("Password updated successfully")
      })
      navigate("/signin").catch((error) => {
        console.error("Password update failed:", error)
      })
      setError("")
      setNewPassword("")
      setCurrentPassword("")
      setConfirmNewPassword("")
    }
  }

  return (
    <div className="home-container">
      <form>
      <div className="col form-style">
        <h2>Change Password</h2>
        <br />
        <div className="col-md-10">
        <label>Current Password:</label>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="form-control"
        />
</div>
<br />
<div className="col-md-10">
        <label>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="form-control"
        />
        </div>
        <br />
        <div className="col-md-10">
        <label>Confirm New Password:</label>
        <input
          type="password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          className="form-control"
        />
        </div>
        <br />
        <button onClick={handleUpdatePassword}>Update Password</button>
      </div>
    </form>
  </div>
  )
}

export default ChangePassword
