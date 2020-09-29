import axios from 'axios'

export default {
  getFullname: email =>
    axios.get(`/auth/api/v1/profile/fullname?email=${email}`),
}
