import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import NotFound from '../views/NotFound.vue'


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

    // เข้าใจว่า : อารมณ์เหมือนเป็นเว็บที่ไม่ได้เข้าบ่อยๆ ถ้าเข้าค่อยโหลด จะได้ไม่เปลือง traffic
    // component: () => import('../views/About.vue')
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
  },
  // redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // catch all 404 
  {
    // หมายความว่า หาก path ที่เข้ามาไม่เข้า path ใดของข้างบนเลย จะมาเข้าที่นี่
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
