import { createRouter, createWebHashHistory } from 'vue-router'

// import HomePage from '../components/HomePage'
import TweetBar from '../components/TweetBar'
import NotFoundPage from '../components/NotFoundPage'


const routes = [
  {
    path: '/',
    name: 'TweetBar',
    component: TweetBar
  },
  {
    path: '/404',
    name: 'NoteFoundPage',
    component: NotFoundPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
