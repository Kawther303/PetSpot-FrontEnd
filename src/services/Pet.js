import Client from './api'

export const AddPet = async (data) => {
  try {
    const res = await Client.post('/pet', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const AddPetItem = async (data) => {
  try {
    const res = await Client.post('/petItem', data)
    return res.data
  } catch (error) {
    throw error
  }
}
// export const updatePet = async (petData) => {
//   try {
//     const response = await axios.put("/pet/:petId", petData)
//     return response.data
//   } catch (error) {
//     throw new Error(error.response.data.error)
//   }
// }

// export const CheckSession = async () => {
//   try {
//     // Checks if the current token if it exists is valid
//     const res = await Client.get('/pet/session')
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }
