import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/jobs',
    component: Jobs,
    name: 'Jobs',
  },
  {
    // เราสามารถส่งค่า id ไปได้เลย เช่น หากเรา localhost/jobs/1 or localhost/jobs/taninchot
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    // ทำให้เราสามารถนำ parameter ที่รับเข้ามา มาเป็น prop ได้
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
