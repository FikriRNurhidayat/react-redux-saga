import axios from 'axios'

export default {
  login: body => axios.post('/auth/api/v1/auth/login', body),
  checkToken: () => axios.get('/auth/api/v1/auth/check_token'),
}
