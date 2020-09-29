import axios from 'axios'

export default {
  getSchedules: () =>
    axios.get('/api/v1/academy/teaching_schedule/mentor'),
}
