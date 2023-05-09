
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
      { path: "/dbtodo", component: () => import("pages/DbTodo.vue") },
      { path: "/storetodo", component: () => import("pages/StoreTodo.vue") },
    ]
  },

  
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
