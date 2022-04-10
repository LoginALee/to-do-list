import NewToDo from '../pages/NewToDo'
import MyToDos from '../pages/MyToDos'
import WhyUs from '../pages/WhyUs'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import LandingPage from '../pages/LandingPage'

const routes = [
  {
    path: '/login',
    component: Login,
    isPrivate: false,
  },
  {
    path: '/whyus',
    component: WhyUs,
    isPrivate: false,
  },
  {
    path: '/signup',
    component: SignUp,
    isPrivate: false,
  },
  {
    path: '/newtodo',
    component: NewToDo,
    isPrivate: true,
  },
  {
    path: '/todos',
    component: MyToDos,
    isPrivate: true,
  },
  {
    path: '/',
    component: LandingPage,
    isPrivate: false,
  },
  {
    path: '/*',
    component: LandingPage, // NEEDS TO ADD A 404 PAGE
  },
]

export default routes
