import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/pokemon',
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: () => import('../modules/pokemon/layouts/PokemonLayout.vue'),
    children: [
      {
        path: '/home',
        name: 'pokemon-home',
        // LazyLoad
        component: () => import('../modules/pokemon/pages/ListPage.vue'),
      },
      {
        path: '/about',
        name: 'pokemon-about',
        // LazyLoad
        component: () => import('../modules/pokemon/pages/AboutPage.vue'),
      },
      {
        path: '/pokemonid/:id',
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
        path: '',
        redirect: { name: 'pokemon-about' },
      },
    ],
  },
  /*
  {
    path: '/home',
    name: 'home',
    // LazyLoad
    component: () => import('../modules/pokemon/pages/ListPage.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // LazyLoad
    component: () => import('../modules/pokemon/pages/AboutPage.vue'),
  },
  {
    path: '/pokemonid/:id',
    name: 'pokemon-id',
    // LazyLoad
    component: () => import('../modules/pokemon/pages/PokemonPage.vue'),
    props: route => {
      const { id } = route.params;
      const idAttr = Number(id);
      return isNaN(idAttr) ? { id: 1 } : { id: idAttr };
    },
  },
*/
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
