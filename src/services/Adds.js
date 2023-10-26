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

export const AddOrder = async () => {
  try {
    const response = await Client.post(`/order/newOrder`)
    console.log('response:', response)
    return response
  } catch (error) {
    throw new Error(error)
  }
}
