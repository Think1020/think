import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import Slide from '../components/Slide'
import Footer from '../components/Footer'
import Consult from '../components/Consult'
import Case from '../components/Case'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/home/slide'},
    {path:'/home',component:Home,
      children:[
        {path:'slide',component:Slide},
        {path:'about',component:About},
        {path:'consule',component:Consult},
        {path:'case',component:Case},
    ]},
    {path:'/footer',component:Footer}
  ]
})
