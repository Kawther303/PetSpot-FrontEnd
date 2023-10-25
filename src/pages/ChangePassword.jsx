import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const ChangePassword = ({ user }) => {
  let navigate = useNavigate()
  console.log(user)
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [error, setError] = useState('')


  const handleUpdatePassword = (e) => {
    e.preventDefault()
    if (newPassword !== confirmNewPassword) {
      setError('password must match.')
      return
    } else {
      axios
        .put(`http://localhost:3001/auth/update/${user.id}`, {
          currentPassword,
          newPassword
        })
        .then((response) => {
          console.log('Password updated successfully')
        })
        navigate("/signin")
        .catch((error) => {
          console.error('Password update failed:', error)
        })
      setError('')
      setNewPassword('')
      setCurrentPassword('')
      setConfirmNewPassword('')
    }
  }

  return (
    <div>
      
      
        <div>
          <label>Current Password:</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <label>Confirm New Password:</label>
          <input
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          <button onClick={handleUpdatePassword}>Update Password</button>
        </div>
    </div>
  )
}

export default ChangePassword