import axios from "axios"

const updateUser = async (userData) => {
  try {
    const response = await axios.put("/auth//updateprofile/:user_id", userData)
    return response.data
  } catch (error) {
    throw new Error(error.response.data.error)
  }
}
