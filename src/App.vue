<template>
    <n-message-provider>
        <login v-if="isAlive"></login>
    </n-message-provider>
</template>
<script >
import Login from './components/login/login.vue'
export default {
    components: {Login},
    data() {
        return {
            isAlive: true
        }
    },
    methods: {
        reload() {
            this.goto();
            this.isAlive = false
        }
    }
}
</script>

