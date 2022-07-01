import axios from 'axios'

const api = axios.create({
  baseURL: 'https://fr.dofus.dofapi.fr',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

const getPets = async () => {
  try {
    const response = await api.get('/pets')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const getPetById = async (id) => {
  try {
    const response = await api.get(`/pets/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export {
  getPets,
  getPetById
}
