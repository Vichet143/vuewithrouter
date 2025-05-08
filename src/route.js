import { createWebHistory, createRouter } from 'vue-router'

import Home from './pages/Home.vue'
import Blog from './pages/Blog.vue'
import Project from './pages/project/index.vue'
import Projectdetail from './pages/project/projectdetail.vue'
import Collection from './components/collection.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/blog', component: Blog },
    { path: '/project', component: Project,children:[
        {path:'',component:Collection},
        {path:':id',component:Projectdetail}
    ]},
]

const router = createRouter({
    linkActiveClass: 'font-bold',
    history: createWebHistory(),
    routes,
})

export default router
