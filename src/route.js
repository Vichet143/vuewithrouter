import { createWebHistory, createRouter } from 'vue-router'

import Home from './pages/Home.vue'
import Blog from './pages/blog/Blog.vue'
import Project from './pages/project/index.vue'
import Projectdetail from './pages/project/projectdetail.vue'
import Collection from './components/collection.vue'
import Blogdetail from './pages/blog/Blogdetail.vue'
import Boxcollection from './components/Boxcollection.vue'
import Service from './pages/service/Service.vue'
import NotFound from './components/NotFound.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/blog', component: Blog ,children:[
        {path:'',component:Boxcollection},
        {path:":id" , component:Blogdetail }
    ]},
    { path: '/project', component: Project,children:[
        {path:'',component:Collection},
        {path:':id',component:Projectdetail}
    ]},
    {path:'/service',component:Service},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
    linkActiveClass: 'font-bold',
    history: createWebHistory(),
    routes,
})

export default router
