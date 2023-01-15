<template>
    <div id="app">
    <button @click="count++">{{ count }}</button>
    </div>
</template>

<script>
import { createApp } from 'vue'
const app = createApp({
  data() {
    return {
      count: 0
    }
  }
})
app.mount('#app')
</script>