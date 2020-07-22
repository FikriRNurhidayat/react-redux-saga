import {
  CalendarOutlined,
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons'

export default () => [
  {
    title: 'Home',
    key: 'home',
    url: '/dashboard/home',
    icon: HomeOutlined,
  },
  {
    title: 'Schedule',
    key: 'schedule',
    url: '/dashboard/schedules',
    icon: CalendarOutlined,
  },
  {
    title: 'Student',
    key: 'student',
    url: '/dashboard/students',
    icon: UserOutlined,
  },
]
