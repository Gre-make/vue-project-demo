import { createRouter, createWebHashHistory } from 'vue-router'



const routers= [
    {
        path:'/hello',
        component:() => import('../components/HelloWorld.vue')
    },
    {
        path:'/register',
        component:() => import('../components/register.vue')
    },
    {
        path:'/back',
        component:() => import('../../src/App.vue')
    },
    {
        path:'/table',
        component:() => import('../components/table.vue')
    }
];



const router = createRouter({
    // history: routerHistory,  // history
    history: createWebHashHistory(), // hash
    routes: routers
  });

export default router;