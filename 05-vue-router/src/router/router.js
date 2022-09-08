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
    path: '/:id',
    name: 'pokemon-id',
    // LazyLoad
    component: () => import('../modules/pokemon/pages/PokemonPage.vue'),
    props: route => {
      const { id } = route.params;
      const idAttr = Number(id);
      return isNaN(idAttr) ? { id: 1 } : { id: idAttr };
    },
  },

  {
    // Busco cualquier URL que no haga match con esto
    path: '/:patchMatch(.*)*',
    // LazyLoad
    component: () => import('../modules/shared/pages/NoPageFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
