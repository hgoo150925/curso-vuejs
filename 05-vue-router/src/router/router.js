import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    // LazyLoad
    component: () => import('../modules/pokemon/pages/ListPage.vue'),
  },
  {
    path: '/about',
    // LazyLoad
    component: () => import('../modules/pokemon/pages/AboutPage.vue'),
  },
  {
    path: '/id',
    // LazyLoad
    component: () => import('../modules/pokemon/pages/PokemonPage.vue'),
  },

  {
    // Busco cualquier URL que no haga match con esto
    path: '/:patchMatch(.*)*',
    // LazyLoad
    component: () => import('../modules/pokemon/pages/NoPageFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
