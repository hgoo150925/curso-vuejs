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
          // Si el id no es un numero retorna el id 1 y si es un numero retorna el id que el user eligio
          return isNaN(idAttr) ? { id: 1 } : { id: idAttr };
        },
      },
      {
        path: '',
        redirect: { name: 'pokemon-about' },
      },
    ],
  },
  // DBZ
  {
    path: '/dbz',
    name: 'dbz',
    component: () => import('../modules/dbz/layouts/DragonBallLayout.vue'),

    children: [
      {
        path: 'characters',
        name: 'dbz-characters',
        component: () => import('../modules/dbz/pages/Characters.vue'),
      },
      {
        path: 'about',
        name: 'dbz-about',
        component: () => import('../modules/dbz/pages/About.vue'),
      },
      {
        path: '',
        redirect: { name: 'dbz-characters' },
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

// Navigation Guards
// Proteccion en la navegacion con Vue
// https://router.vuejs.org/guide/advanced/navigation-guards.html

// Guard Global - Síncrono
// router.beforeEach( ( to, from, next ) => {
//     // console.log({ to, from, next });

// const random = Math.random() * 100
// if( random > 50 ) {
//     console.log('autenticado')
//     next()
// } else {
//     console.log(random, 'bloqueado por el beforeEach Guard')
//     next({ name: 'pokemon-home' })
// }
//     // next()
// })

// const canAccess = () => {
//     return new Promise( resolve => {

//         const random = Math.random() * 100
//         if( random > 50 ) {
//             console.log('Autenticado - canAccess')
//             resolve(true)
//         } else {
//             console.log(random, 'bloqueado por el beforeEach Guard - canAccess')
//             resolve(false)
//         }

//     })
// }

// router.beforeEach( async(to, from, next) => {

//     const authorized = await canAccess()

//     authorized
//         ? next()
//         : next({ name: 'pokemon-home' })

// })

export default router;
