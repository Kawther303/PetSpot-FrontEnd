import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { UpdatePassword } from "../services/Auth";

const ChangePassword = () => {
  let navigate = useNavigate()
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await UpdatePassword(newPassword, oldPassword)
      navigate("/signin")
      // Handle success scenario
      console.log("Password updated successfully");
    } catch (error) {
      // Handle error scenario
      console.error("Error updating password:", error.response.data.msg);
      setErrorMessage(error.response.data.msg);
    }
  };

  //   try {
  //     // let user_id = user.id
  //     const response = await UpdatePassword({
  //       currentPassword,
  //       newPassword,
  //     });

  //     // Handle success scenario
  //     console.log("Password updated ");
  //     navigate("/");
  //   } catch (error) {
  //     // Handle error scenario
  //     console.error("Error updating", error);
  //   }
  // };
  
  return (
    <div className="signin col main-background">
    <form onSubmit={handleFormSubmit}
    className="col form-style"
    >
      <h1 className="form-heading">Change Password</h1>
      <br />
      <div className="col-md-8">
        <label htmlFor="Current Password">Current Password</label>
        <input
          type="password"
          value={oldPassword}
          className="form-control"
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <br />
      </div>
      <div className="col-md-8">
        <label htmlFor="New Password">New Password</label>
        <input
          type="password"
          value={newPassword}
          className="form-control"
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <br />
      <button type="submit">Update Password</button>
    </form>
    </div>
  );
};

export default ChangePassword;