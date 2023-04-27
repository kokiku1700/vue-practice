
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/vue', component: () => import('pages/VueEx.vue') },
      { path: '/shop', component: () => import('pages/ShoppingList.vue') },
      { path: '/todo', component: () => import('pages/Todo.vue') },
      { path: '/login', component: () => import('src/pages/Login.vue')},
      { path: '/success', component: () => import('src/pages/success.vue')},
    ]
  },

  
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
