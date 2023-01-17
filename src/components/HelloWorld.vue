<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
<RouterView></RouterView>
<RouterLink v-if="isAlive" @click.native="reload" to="/back">返回</RouterLink>
</template>

<script>
export default {
  name: 'He',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0,
      isAlive: true
    }
  }
}
</script>
