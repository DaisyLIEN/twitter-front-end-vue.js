import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = 'https://still-savannah-82085.herokuapp.com/api'

export const apiHelper = axios.create({
  baseURL,
})

// copy from SweetAlert2
export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 5000
})