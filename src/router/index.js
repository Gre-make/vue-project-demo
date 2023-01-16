import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import He from '../src/components/HelloWorld.vue'
import Re from '/Users/liwenchao/WebstormProjects/vue/vue-project-demo/src/components/register.vue'



const routers= [

    {
        path:'/he',
        component:He
    },
    {
        path:'/re',
        component:Re
    }
];



const router = createRouter({
    // history: routerHistory,  // history
    history: createWebHashHistory(), // hash
    routers,
  });

export default router;