import axios from 'axios'

export const setAuthToken = token => {
  axios.defaults.headers.common['Authorization'] = token
  axios.defaults.headers.common['X-Mobile-App'] = 'android'
}

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
