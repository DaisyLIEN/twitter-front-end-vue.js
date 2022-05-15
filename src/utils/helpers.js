import axios from 'axios'

const baseURL = 'https://still-savannah-82085.herokuapp.com/api'

export const apiHelper = axios.create({
  baseURL
})