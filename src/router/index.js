import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Rainbow from '../views/Rainbow_fire.vue'
import Gallery from '../views/Gallery.vue'
import Contact from '../views/Contact.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Rainbow_fire',
    name: 'Rainbow_fire',
    component: Rainbow
  },
  {
    path: '/Gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router