import NewToDo from '../pages/NewToDo'
import MyToDos from '../pages/MyToDos'
import WhyUs from '../pages/WhyUs'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import LandingPage from '../pages/LandingPage'

const routes = [
  {
    path: '/',
    component: LandingPage,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/whyus',
    component: WhyUs,
  },
  {
    path: '/signup',
    component: SignUp,
  },
  {
    path: '/newtodo',
    component: NewToDo,
  },
  {
    path: '/todos',
    component: MyToDos,
  },
  {
    path: '/*',
    component: LandingPage, // NEEDS TO ADD A 404 PAGE
  },
]

export default routes
