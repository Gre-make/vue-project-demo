<template>
<!-- `greet` 是上面定义过的方法名 -->
<button @click.once="greet()">{{this.count}}</button>
<!-- 仅在 `key` 为 `Enter` 时调用 `submit` -->
<input @keyup.meta="greet" />

</template>

<script>
Vue.config.keyCodes.f2 = 113;
export default {
  data() {
  return {
    name: 'Vue.js',
    count: 0
  }
},
methods: {
  greet() {
    // `event` 是 DOM 原生事件
    return this.count++;
  }
}
}



</script>
