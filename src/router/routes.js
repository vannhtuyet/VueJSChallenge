const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/Home', component: () => import('pages/Home.vue')},
      {path: '/MyCards', component: () => import('pages/MyCards.vue')},
      { path: '/Credit', component: () => import('pages/Credit.vue') },
      { path: '/Payment', component: () => import('pages/Payment.vue') },
      { path: '/AdminView', component: () => import('pages/AdminView.vue') }
    ]
  },
  {
    path: '/Login',
    component: () => import('pages/Login.vue')
  }
]
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
