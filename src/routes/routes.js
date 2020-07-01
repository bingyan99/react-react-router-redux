import App from '../views/App'
import Home from '../views/Home'
import User from '../views/User'

export default [
  {
    path: "/home",
    component: Home,
    meta: {
      title: 'home页面'
    }
  },
  {
    path: "/users",
    component: User,
    meta: {
      title: 'user页面'
    }
  },
  {
    path: "*",
    component: App,
    meta: {
      title: '首页'
    }
  },
]