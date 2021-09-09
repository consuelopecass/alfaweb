import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from  'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      privado: true
    },
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/registro',
    name: 'registro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    meta: {
      privado: true
    },
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue')
  },
  {
    path: '/edicion/:id',
    props: true,
    name: 'Edicion',
    meta: {
      privado: true
    },
    component: () => import(/* webpackChunkName: "edicion" */ '../views/Edicion.vue')
  },
  {
    path: '/*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
  },
  {
    path: '*',
    redirect: '/login'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  let user =  firebase.auth().currentUser;
  console.log(user);
  console.log(to);
  let private_rute = to.meta.privado;

  if(private_rute && !user){
    next('/login')
  }
  else if(private_rute == undefined && user){
    next('/')
  }
  else {
    next()
  }
})

export default router
