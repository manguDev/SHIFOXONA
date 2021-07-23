import Vue from 'vue'
import VueRouter from 'vue-router'
import boshSahifa from '../views/bosh-sahifa'
import bemorlar from '../views/bemorlar'
import shifokorlar from '../views/shifokor'
import reference from '../components/shifo/referrence'
import gen from '../components/bemor/gen'
Vue.use(VueRouter)

const routes = [
{
  path:'/',
  component:boshSahifa
},
{
  path:'/bemorlar',
  component:bemorlar
},
{
  path:'/shifokorlar',
  component:shifokorlar
},
{
  path:'/doctors/:id',
  component:reference
},
{
  path:'/sores/:id',
  component:gen
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
