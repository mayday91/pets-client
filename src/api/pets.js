import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllPets = () => {
  return axios(`${apiUrl}/pets`)
}

export const getOnePet = (id) => {
  return axios(`${apiUrl}/pets/${id}`)
}