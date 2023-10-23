import Client from './api'

export const SignInUser = async (data) => {
  try {
    const res = await Client.post('/auth/signin', data)
    // Set the current signed in users token to localStorage
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}
// axios
export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/auth/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateUser = async (userData, user_id) => {
  try {
    const response = await Client.put(`auth/editProfile/${user_id}`, userData)
    return response.data
  } catch (error) {
    throw new Error(error.response.data.error)
  }
}

// export const showUser = async (userData) => {
//   try {
//     const response = await axios.get("auth/show/:user_id", userData)
//     return response.data
//   } catch (error) {
//     throw new Error(error.response.data.error)
//   }
// }

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await Client.get('/auth/session')
    return res.data
  } catch (error) {
    throw error
  }
}
