<template>
    <n-message-provider>
        <RouterView></RouterView>
        <!-- <RouterLink v-if="isAlive" @click.native="reload" to="/hello">he</RouterLink> -->
        <button @click="reload">re</button>
        <button @click="to">he</button>
    </n-message-provider>
</template>
<script >
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter();
        function goto() {
            router.push("/register");
        }
        function to() {
            router.push("/hello");
        }
        return {
            goto,  //一定要要放在return里才能在模板上面使用
            to
        }
    },
    data() {
        return {
            isAlive: true
        }
    },
    methods: {
        reload() {
            this.goto();
        }
    }
}
</script>

