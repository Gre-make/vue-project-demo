import Router from 'vue-router'
import Vue from 'vue'
import He from '/Users/liwenchao/WebstormProjects/vue/vue-project-demo/src/components/HelloWorld.vue'
import Re from '/Users/liwenchao/WebstormProjects/vue/vue-project-demo/src/components/register.vue'


Vue.use(Router)

const routers= [

    {
        path:'/he',
        component:He
    },
    {
        path:'/re',
        component:Re
    }
]


const router = new Router({
    routers
})

export default router