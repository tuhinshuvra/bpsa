import Axios from 'axios'

export const setAuthToken = (token) => {
  Axios.defaults.headers.common['Authorization'] = token
}
